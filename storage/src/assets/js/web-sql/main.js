import $ from "jquery";
import "bootstrap";
import "jquery-serializejson";
import Promise from "promise";
import {runWith, StringBuilder} from "../common/common";


function col(name, type, constraint, _default) {
    return {name, type, constraint, default: _default}
}

class Statement {
    constructor(tx) {
        this._tx = tx;
    }

    query(sql, ...args) {
        console.log(sql);
        return new Promise((resolve, reject) => {
            this._tx.executeSql(sql, args, (tx, rs) => resolve(rs), (tx, err) => {
                console.error(err);
                reject(err);
            });
        });
    }

    add(table, entity) {
        const names = [], marks = [], values = [];
        for (const name in entity) {
            if (!entity.hasOwnProperty(name)) {
                continue;
            }

            names.push(name);
            values.push(entity[name]);
            console.log(values);
            marks.push('?');
        }
        return this.query(`insert into ${table}(${names.join(',')})values(${marks.join(',')});`, ...values);
    };

    createTable(name, columns) {
        const sqls = columns.map(c => {
            const sb = new StringBuilder();
            sb.append('\t').append(c.name).append(c.type);
            if (c.constraint) {
                sb.append(c.constraint);
            }
            if (c.default) {
                sb.append('default').append(typeof c.default === 'string' ? `'${c.default}'` : c.default);
            }
            return sb.toString(' ');
        });
        return this.query(`create table if not exists ${name}(\n${sqls.join(',\n')}\n);`);
    }
}

class Database {
    constructor(name, version, describe, size) {
        this._new = false;
        this._conn = window.openDatabase(name, version, describe, size, () => this._new = true);
    }

    stm() {
        return new Promise((resolve, reject) => {
            this._conn.transaction(tx => resolve(new Statement(tx)), err => reject(err))
        });
    }

    get isNew() {
        return this._new;
    }
}


function getConnection(name, version, describe = '', size = 1048576) {
    let className, showText;
    if (window.openDatabase) {
        className = 'info';
        showText = "Web SQL is supported";
    } else {
        className = 'warning';
        showText = "Web SQL is not supported";
    }

    $('#is-support').append(`
        <div class="alert alert-${className} alert-dismissible fade show" role="alert">
            ${showText}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`);

    return window.openDatabase ? new Database(name, version, describe, size) : null;
}

runWith('websql.index', function () {

    const db = getConnection('demo', '1.0');
    if (!db) {
        return;
    }

    $(() => {
        db.stm().then(stm => {
            stm.createTable('demo', [
                col('id', 'integer', 'primary key'),
                col('name', 'varchar(50)', 'not null'),
                col('gender', 'char(1)', 'not null', 'M'),
                col('birthday', 'date', 'not null'),
                col('telephone', 'varchar(50)', 'not null')
            ]).then(() => {
                stm.query('select name, gender, birthday, telephone from demo where id=?', 1).then(rs => {
                    let update = false;
                    if (rs.rows.length > 0) {
                        const data = rs.rows[0];

                        update = true;
                    }

                    $('form').on('submit', e => {
                        e.preventDefault();

                        db.stm().then(stm => {
                            stm.add('demo', $.extend($(e.currentTarget).serializeJSON(), {id: 1}));
                        });
                        return false;
                    })
                });
            });
        });
    });

});

// (function (global) {
//
//     var db = new Database('demo', '1.0');
//     db.tx(function (stmt) {
//         stmt.createTable('demo', [
//             createColumnSql('name', 'varchar(50)', 'not null'),
//             createColumnSql('gender', 'char(1)', 'not null', 'M'),
//             createColumnSql('age', 'int', 'not null'),
//             createColumnSql('telephone', 'varchar(50)', 'not null')
//         ]);
//     });
//
//     var form = document.getElementsByClassName("form")[0];
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//
//         var elems = form.elements;
//         var data = {};
//
//         for (var i = 0; i < elems.length; i++) {
//             var elem = elems[i];
//             if (elem.name) {
//                 if (elem.type === 'radio') {
//                     if (elem.checked) {
//                         data[elem.name] = elem.value;
//                     }
//                 } else {
//                     data[elem.name] = elem.value;
//                 }
//             }
//         }
//         db.tx(function (stmt) {
//             stmt.insert('demo', data, function () {
//                 location.reload();
//             }, function (err) {
//                 alert(err);
//             });
//         });
//         return false;
//     });
//
//     document.addEventListener('DOMContentLoaded', function (e) {
//         db.tx(function (stmt) {
//             stmt.select('demo', function (rs) {
//                 for (var i = 0; i < rs.rows.length; i++) {
//                     console.log(rs.rows[i].name);
//                 }
//             });
//         });
//     });
//
// })(this);
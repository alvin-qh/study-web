;
(function (global) {

    if (!window.openDatabase) {
        throw "Local database not supported";
    }

    function Database(name, version, size, describe) {
        var self = this;

        var _new = false;
        var _conn = global.openDatabase(name, version, describe || '', size || 1024 * 1024, function () {
            _new = true;
        });

        this.isNew = function () {
            return _new;
        };

        this.conn = function () {
            return _conn;
        }
    }

    function createColumnSql(name, type, constraint, _default) {
        return {
            name: name,
            type: type,
            constraint: constraint,
            'default': _default
        }
    }

    Database.prototype.tx = function (fn) {
        this.conn().transaction(function (tx) {
            fn(new Statement(tx));
        })
    };

    function Statement(tx) {
        this.tx = tx;
    }

    Statement.prototype.createTable = function (name, columns, successFn, errorFn) {
        var columnSqls = [];
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            var columnSql = ['\t', column.name, column.type];
            if (column.constraint) {
                columnSql.push(column.constraint);
            }
            if (column['default']) {
                var def = column['default'];
                if (typeof def !== 'number') {
                    def = '\'' + def + '\'';
                }
                columnSql.push('default ' + def);
            }
            columnSqls.push(columnSql.join(' '));
        }
        var sql = 'create table if not exists ' + name + '(\n' + columnSqls.join(',\n') + '\n);';
        this.tx.executeSql(sql, successFn, function (tx, err) {
            if (errorFn) {
                errorFn(err, tx);
            }
        });
    };

    Statement.prototype.insert = function (table, entity, successFn, errorFn) {
        var names = [], marks = [], values = [];
        for (var name in entity) {
            var old = values.length;
            var val = entity[name];
            switch (typeof val) {
                case 'function':
                case 'undefined':
                    break;
                default:
                    values.push(val);
            }
            if (values.length != old) {
                names.push(name);
                marks.push('?');
            }
        }
        var sql = 'insert into ' + table + '(' + names.join(',') + ')values(' + marks.join(',') + ');';
        console.log(sql);
        this.tx.executeSql(sql, values, successFn, function (tx, err) {
            if (errorFn) {
                errorFn(err, tx);
            }
        });
    };

    Statement.prototype.select = function (table, columns, where, args, successFn, errorFn) {
        if (typeof columns === 'function') {
            successFn = columns;
            errorFn = where;
            columns = ['*'];
            args = [];
        } else if (typeof  where === 'function') {
            successFn = where;
            errorFn = args;
            args = [];
        } else if (typeof args === 'function') {
            errorFn = successFn;
            successFn = args;
            args = [];
        }

        var sql = 'select ' + columns.join(',') + ' from ' + table;
        if (where) {
            sql += (' where' + where);
        }

        this.tx.executeSql(sql, args || [], function (tx, result) {
            if (successFn) {
                successFn(result, tx);
            }
        }, function (tx, error) {
            console.log(error);
            if (errorFn) {
                errorFn(error, tx);
            }
        });
    };

    var db = new Database('demo', '1.0');
    db.tx(function (stmt) {
        stmt.createTable('demo', [
            createColumnSql('name', 'varchar(50)', 'not null'),
            createColumnSql('gender', 'char(1)', 'not null', 'M'),
            createColumnSql('age', 'int', 'not null'),
            createColumnSql('telephone', 'varchar(50)', 'not null')
        ]);
    });

    var form = document.getElementsByClassName("form")[0];
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var elems = form.elements;
        var data = {};

        for (var i = 0; i < elems.length; i++) {
            var elem = elems[i];
            if (elem.name) {
                if (elem.type === 'radio') {
                    if (elem.checked) {
                        data[elem.name] = elem.value;
                    }
                } else {
                    data[elem.name] = elem.value;
                }
            }
        }
        db.tx(function (stmt) {
            stmt.insert('demo', data, function () {
                location.reload();
            }, function (err) {
                alert(err);
            });
        });
        return false;
    });

    document.addEventListener('DOMContentLoaded', function (e) {
        db.tx(function (stmt) {
            stmt.select('demo', function (rs) {
                for (var i = 0; i < rs.rows.length; i++) {
                    console.log(rs.rows[i].name);
                }
            });
        });
    });

})(this);
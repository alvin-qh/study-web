<template>
    <div class="out-bound" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="it in tableItems">
                <td>{{ it.id }}</td>
                <td>{{ it.name }}</td>
                <td>{{ it.gender }}</td>
                <td>{{ it.type }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="js">
    import infiniteScroll from 'vue-infinite-scroll';

    function makeTableData() {
        const data = [];
        for (let i = 0; i < 10000; i++) {
            data.push({
                id: i + 1,
                name: `Alvin_${i}`,
                gender: i % 2 === 0 ? 'M' : 'F',
                type: i % 3 === 0 ? 'STUDENT' : 'TEACHER'
            });
        }
        return data;
    }

    const dataSource = {
        from: 0,
        pre: 20,
        data: makeTableData(),
        finish: false,
        nextPage() {
            if (this.finish) {
                return [];
            }

            const start = this.from++ * this.pre;
            const end = start + this.pre;
            const data = this.data.slice(start, end);
            if (data.length < this.pre) {
                this.finish = true;
            }
            return data;
        }
    };

    export default {
        data() {
            return {
                tableItems: dataSource.nextPage(),
                busy: false
            };
        },
        directives: {
            infiniteScroll
        },
        methods: {
            loadMore: function () {
                this.busy = true;

                setTimeout(() => {
                    const data = dataSource.nextPage();
                    if (data.length > 0) {
                        this.tableItems = this.tableItems.concat(data);
                    }
                    this.busy = false;
                }, 300);
            }
        }
    }
</script>

<style scoped lang="less">
    table {
        font-size: 10px;
        width: 100%;
    }
</style>

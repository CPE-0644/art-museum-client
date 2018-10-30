<template>
  <el-table
    :data="collections"
    style="width: 100%">
    <el-table-column
      fixed
      prop="collection.name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="collection.type"
      label="Type"
      width="150">
    </el-table-column>
    <el-table-column
      prop="collection.description"
      label="Description"
      width= "400">
    </el-table-column>
    <el-table-column
      prop="collection.contact_name"
      label="Contact name"
      width="300">
    </el-table-column>
    <el-table-column
      prop="collection.contact_phone"
      label="Phone Number"
      width="120">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['collections'],
  name: 'CollectionList',
  data() {
    return {
      tableData3: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }
      ]
    };
  }
};
</script>
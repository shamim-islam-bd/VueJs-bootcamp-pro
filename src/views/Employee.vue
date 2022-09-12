<template lang="">
  <div class="container mt-4">
    <h1>Employe</h1>
    <!-- make a table -->
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <th scope="row">{{ employee.id }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.phone }}</td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteEmployee(employee.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Employee",
  data: function () {
    return {
      employees: [
        {
          id: 1,
          name: "John Doe",
          email: "shamim@gmail.com",
          phone: "01700000000",
        },
        {
          id: 2,
          name: "kahn",
          email: "kahn@gmail.com",
          phone: "017004353500",
        },
        {
          id: 3,
          name: "dfkaf",
          email: "dfkaf@gmail.com",
          phone: "017004353500",
        },
        {
          id: 4,
          name: "jasin",
          email: "jasin@gmail.com",
          phone: "017004353500",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>

<template>
  <div>LogOut</div>
</template>

<script>
import { APIService } from "../utils/APIService.js";
import auth from "../utils/auth.js";

const apiService = new APIService();

export default {
  name: "SignOut",
  methods: {
    logOut() {
      return apiService.logOutUser().then(() => {
        const cf = confirm("Are you sure to logout!?");
        if (cf) {
          auth.signOut();
          location.reload();
          this.$router.push("/");
        } else {
          this.$router.push("/");
        }
      });
    }
  },
  mounted() {
    this.logOut();
  }
};
</script>

<style>
</style>

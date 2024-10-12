<script setup lang="ts">
  import { ref } from 'vue';

  // Global constant containing the API base URL -> /api
  const baseURL = __API_PATH__;

  // Reactive variables for managing loading state and response message
  const isLoading = ref(false);
  const studentId = ref('');

  function handleIdChange(e) {
    studentId.value = e.target.value;
  }

  // Function to fetch data from the server
  async function fetchStudent(e: SubmitEvent) {
    e.preventDefault();
    try {
      // Set loading state to true
      isLoading.value = true;

      // Send a GET request to the server
      const response = await fetch(`${baseURL}/student/${studentId.value}`);

      // Parse the JSON response
      const data = await response.json();

      // Update the message with the response data
    } catch (error) {
      // Handle errors
      console.error(error);
    } finally {
      // Reset loading state
      isLoading.value = false;
    }
  }
</script>

<template>
  <h1>Create a visit</h1>
  <form>
    <div>
      <label>Enter student CMS</label>
      <input placeholder="878378" @change="handleIdChange" :value="studentId" />
    </div>
    <button @click="fetchStudent" type="submit">Get User</button>
  </form>
</template>

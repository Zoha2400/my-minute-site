<template>
    <div class="reg-wrap">
        <div class="reg">
            <h2>Логин</h2>
            <form action="" method="post">
                <input type="email" name="email" id="email" placeholder="admin@gmail.com">
                <input type="password" name="email" id="email" placeholder="12345678">
                <button type="submit">Войти</button>
            </form>

            <p>Еще нету акканта? <RouterLink to="/reg">Создайте его!</RouterLink></p>
        </div>
    </div>
</template>


<script setup lang="ts">

</script>

<style>

@import url('../assets/reg.scss');

</style>
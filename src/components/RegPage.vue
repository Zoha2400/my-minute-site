<template>
    <div class="reg-wrap">
        <div class="reg">
            <h2>Регистрация</h2>
            <form action="" method="post">
                <input type="email" name="email" id="email" placeholder="admin@gmail.com">
                <input type="password" name="email" id="email" placeholder="12345678">
                <button type="submit">Зарегестрироваться</button>
            </form>

            <p>Уже есть аккаунт? <RouterLink to="/login">Зайти!</RouterLink></p>
        </div>
    </div>
</template>


<script setup lang="ts">

</script>

<style>

@import url('../assets/reg.scss');

</style>
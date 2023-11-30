<template>
  <div class="admin">
    <div class="tables">
      <div class="table-disc">
        <TablePartVue />
      </div>
    </div>

    <div class="wind">
      <div class="inf-scr">
        <div class="info">
          <div class="textin-info">
            <div class="imgages">
              <img :src="example" alt="" class="main" />
            </div>

            <div class="cont-info">
              <div class="header-info">
                <p>ПРОЕКТ № <input type="text" value="1" /></p>
              </div>
              <div class="body-info">
                <p>Размер: <input type="text" value="13.6x25.4" /></p>
                <p>Площадь: <input type="text" value="392" /></p>
                <p>Cоток: <input type="text" value="6.7" /></p>
                <p>Стиль: <input type="text" value="Неокласика" /></p>
              </div>

              <div class="footer-info">
                <textarea name="info" id="" cols="30" rows="10" placeholder="Информация">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore voluptates quidem, deserunt consequatur in repellendus ducimus omnis. Incidunt ea commodi aspernatur explicabo minima esse impedit repellat voluptatum dicta sed.
                </textarea>
              </div>

              <button class="inpButton">Обновить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TablePartVue from './TablePart.vue'
import example from '../img/photo.svg'
</script>

<style>
@import url('../assets/admin.scss');
</style>

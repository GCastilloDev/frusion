<!-- 
Componente Section
Este componente es una seccion que almacena Cards
Ejemplo de secciones: Promociones, Productos mas vendidos, etc.
Props: Nombre de la seccion, componente al que se rediriguira
en caso de que tenga mas elementos que mostrar, y un objeto con
los elementos para poder pintar las cards.
 -->
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h2>Promociones de la semana</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">

</style>
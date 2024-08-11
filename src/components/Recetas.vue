<script setup>

</script>

<template>

    <h2>Algunas recetas</h2>
    <div class="listado-recetas row my-3">
        <div class="receta col-12 col-md-6 my-2 my-md-0">
            <div class="card">
                <img src=" /img/salmorejo.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Salmorejo Cordobés</h5>
                    <p class="card-text">Uno de los mejores platos de la gastronomía andaluza</p>
                    <a href="#" class="btn">Ver Receta</a>
                </div>
            </div>
        </div>
        <div class="receta col-12 col-md-6">
            <div class="card">
                <img src=" /img/salmorejo.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Salmorejo Cordobés</h5>
                    <p class="card-text">Uno de los mejores platos de la gastronomía andaluza</p>
                    <a href="#" class="btn">Ver Receta</a>
                </div>
            </div>
        </div>

    </div>


</template>



<style scoped>
h2 {
    font-size: 2.5rem;
    color: var(--amber-800);
    text-align: center;
    font-family: var(--titulo-font);
}

.listado-recetas {
    width: 100%;
    margin: 0 auto;

}

@media (width > 991px) {
    .listado-recetas {
        width: 60%;
    }
}

.btn {
    background-color: var(--amber-800);
    border: none;
    width: 100%;
    color: white;
}

.btn:hover {
    background-color: var(--amber-700);
    color: white;
}
</style>
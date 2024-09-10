<script setup>

</script>
<template>


    <div class=" d-flex justify-content-center py-5 ">
        <div class="border-0 rounded-2 shadow row mx-auto buscador">
            <form>
                <div class="row py-3 ">
                    <div class="input-group p-0">
                        <input id="receta" placeholder="Buscar receta" class="form-control">
                        <button type="submit" class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>



<style scoped>
.buscador form {
    width: 95%;
    margin: 0 auto;
}

.buscador {
    background-image: url("/img/fondo_buscador_min.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 85%;
}

.buscador .btn {
    background-color: var(--amber-700);
    color: white;
    transition: all 0.2s ease;
}

.buscador .btn:hover {
    background-color: var(--amber-600);
}

@media (width > 991px) {
    .buscador {
        width: 50%;
    }
}
</style>
<template>
        <div class="card">
            <div class="photo">
                <slot name="prod-img"></slot>
            </div>
            <div class="content">
                <div class="title">
                    <slot name="prod-title"></slot>
                </div>
                <div class="bg-title" >
                    <slot name="prod-title"></slot>
                </div>
                <div class="feature">
                    <slot name="Desc"></slot>
                </div>
            </div>
        </div>

</template>
<script>
export default {
    name: "CardComp"
}
</script>
<style scoped>

.card {
    position: relative;
    width: 290px;
    height: 400px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
    margin: 10px;
}
.title {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin-top: 12px;
}

.bg-title {
    font-size: 10em;
    font-weight: 900;
    font-style: italic;
    color: rgba(255, 255, 255, .04);
    position: absolute;
    max-width: 120%;
    top: -150%;
    transition: .6s;
}

.card:hover .bg-title {
    transform: translateY(60%);
}

.photo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 100%;
    height: 220px;
    transition: .5s;
}

.card:hover .photo {
    top: 0%;
    transform: translateY(0%);
}

.photo img {
    position: absolute;
    width: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    transition: .5s;
}

.card:hover .photo img {
    width: 260px;
    top: 56%;
}

.content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 5;
}

.card:hover .content {
    height: 190px;
}

.feature {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: .5s;
    visibility: hidden;
    opacity: 0;
}

.card:hover .feature {
    visibility: visible;
    opacity: 1;
    transition-delay: .5s;
}

.feature{
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.feature{
    min-width: 20px;
    padding: 0 4px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    margin: 0 5px;
    transition: .4s;
}

.card:hover{
    background: rgb(31,37,64);
    transition-delay: 0;
    transition: 0.05s;
}
</style>
<template>
    <carousel :imgs="imgs" :delay="2000"></carousel> 
</template>
<script>
    import Carousel from './carousel/index.vue'
    export default{
        data () {
            return {
                // imgs: [
                //     {url:require('./assets/img1.jpg')},
                //     {url:require('./assets/img2.jpg')},
                //     {url:require('./assets/img3.jpg')},
                //     {url:require('./assets/img4.jpg')}
                // ]
                imgs: []
            }
        },
        mounted () {
             setTimeout(()=>{
                console.log(this.imgs)
                this.imgs =  [
                    {url:require('./assets/img1.jpg')},
                    {url:require('./assets/img2.jpg')},
                    {url:require('./assets/img3.jpg')},
                    {url:require('./assets/img4.jpg')}
                ]
            },3000)
        },
        components: {
            Carousel
        }
    }
</script>
<style>
 
</style>
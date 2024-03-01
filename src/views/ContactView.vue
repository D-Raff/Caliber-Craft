<template>
    <div class="container-fluid" id="contact">
        <form @submit.prevent="formSubmit" action="https://formspree.io/f/xeqyknoz" method="POST" class="form-body">
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Enter your name</label>
                <input v-model="formData.name" type="Name" class="form-control" id="exampleInputName">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="formData.email" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
            </div>
            <div class="mb-3 form-check">
                <section>
                    Your message:
                </section>
                <textarea v-model="formData.message" name="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    components: {
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        async formSubmit() {
            try {
                alert('Form successfully submitted');
                await axios.post('https://formspree.io/f/xeqyknoz', this.formData);
                this.formData = {
                    name: '',
                    email: '',
                    message: ''
                };
            } catch (error) {
                console.error('Error submitting the form:', error);
            }
        }
    }
}

</script>
<style>
#contact {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-body {
    width: 30%;
    min-height: 600px;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://iili.io/JGw1l5B.png');
    background-position: top;
    color: aqua;

}

textarea[name="message"] {
    height: 200px;
}
</style>
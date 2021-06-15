<template>
    <div class="wrapper">
        <h3>Signup form</h3>
        <!-- This form library is easier to work with validation wise :D -->
        <FormulateForm v-model="formValues" class="formWrapper">
            <FormulateInput
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                validation="required"
            />

            <FormulateInput
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                validation="required"
            />

            <FormulateInput
                name="name"
                type="text"
                label="Name"
                placeholder="Name"
                validation="required"
            />

            <div class="btnWrapper">
                <FormulateInput
                    type="submit"
                    label="Signup"
                    @click="onSubmit"
                />

                <NuxtLink to="/"><b-button type="button">Home</b-button></NuxtLink>
            </div>
        </FormulateForm>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                formValues: {}
            }
        },
        methods: {
            async onSubmit(e) {
                e.preventDefault();
                await fetch("http://localhost:7000/users/register", 
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: this.formValues?.name,
                        email: this.formValues?.email,
                        password: this.formValues?.password
                    })
                });

                await this.$router.push('/signin')
                console.log(this.formValues?.email);
                console.log(this.formValues?.password);
                console.log(this.formValues?.name);
            },

        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 50vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        /* border: solid blue; */
    }

    .formWrapper {
        /* border: solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .btnWrapper {
        /* border: solid green; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
</style>
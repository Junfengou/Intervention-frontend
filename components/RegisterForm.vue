<template>
    <div class="wrapper">
        <h3>Sign up for an account</h3>
        <FormulateForm @submit="submitHandler" v-model="formValues" class="formWrapper" >
            <label>Email</label>
            <FormulateInput
                name="email"
                type="email"
                placeholder="Email"
                validation="email|required"
                class="inputbox"
            />

            <label>Password</label>
            <FormulateInput
                name="password"
                type="password"
                placeholder="Enter your password"
                validation="required|min:8,length|matches:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/"
                :validation-messages="{
                    matches: 'Passwords require at least eight characters, one letter, one number and one special character.',
                }"
            />

            <label>Name</label>
            <FormulateInput
                name="name"
                type="text"
                placeholder="Enter your name"
            />

        <div class="btnContainer">
            <FormulateInput
                type="submit"
                label="Register"
            />
            <NuxtLink to="/signin"><b-button type="button">Login</b-button></NuxtLink>
        </div>
                
        </FormulateForm>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formValues: {},
            }
        },

        methods: {
            async submitHandler(e) {
                try {
                    await fetch("http://localhost:7000/users/register", {
                        method: "POST",
                        headers: {'Content-Type': 'application/json' },
                        credentials: 'include',
                        body: JSON.stringify({
                            email: this.formValues?.email,
                            password: this.formValues?.password,
                            name: this.formValues?.name
                        })
                    })
                }
                catch(e) {
                    console.error(e);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 50vh;
        width:  100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
    }

    .formWrapper {

        padding: 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;

    }

    .btnContainer {
        display: flex;
        gap: 2rem;
    }

</style>
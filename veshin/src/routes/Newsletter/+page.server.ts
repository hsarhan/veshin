// SignUp Form dependencies
import { object, string } from 'yup';
import type { Actions } from './$types';

// Sign Up Form Actions
export const actions: Actions = {
	default: async ({ request }: { request: Request }) => {
		const formID = '1FAIpQLSeu_Ps5ekYmnhfOBMc-onzv2HDXFooCJwIWuOQy5zn3SR7EXA';

		const formData = await request.formData();
		const name = formData.get('name');
		const lastname = formData.get('lastname');
		const email = formData.get('email');

		const signUpFormSchema = object({
			name: string().min(2).max(64).required('Add your name'),
			lastname: string().min(2).max(64).required('Add your lastname'),
			email: string().required('Add a valid email').email()
		});

		try {
			const result = await signUpFormSchema.validate(
				{ name, lastname, email },
				{ abortEarly: false }
			);

			const prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.881680626=${name}&entry.1736466417=${lastname}&entry.808300705=${email}&submit=Submit`;

			const res = await fetch(prefilledLink);
			// Inputs to DataBase

			return {
				success: true,
				status:
					'<span class="text-secondary-500 dark:text-success-500 font-bold">Sign Up completed.</span><br/>Thanks!'
			};
		} catch (error) {
			console.log({ error });
			const errors = error.inner.reduce((acc, err) => {
				return {
					...acc,
					[err.path]: err.message
				};
			}, {});

			return {
				errors,
				name,
				lastname,
				email
			};
		}
	}
};

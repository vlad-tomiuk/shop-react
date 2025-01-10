import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FormOrder({ setFormSubmitStatus, cartReset }) {
	const validationSchema = Yup.object({
		name: Yup.string().required('Це поле обов’язкове'),
		email: Yup.string().email('Невірний формат email').required('Це поле обов’язкове'),
		phone: Yup.string().required('Це поле обов’язкове'),
		town: Yup.string().required('Це поле обов’язкове'),
		postOffice: Yup.number().required('Це поле обов’язкове').positive('Номер повинен бути більше нуля'),
		payment: Yup.string().required('Це поле обов’язкове'),
	});
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			// За допомогою fetch відправляємо JSON.stringify(values) на API для обробки даних
			console.log('Замовлення успішно відправлено!', JSON.stringify(values));
			setFormSubmitStatus(true);
			cartReset();
			resetForm();
		} catch (error) {
			console.error('Помилка:', error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				phone: '',
				town: '',
				postOffice: '',
				payment: '',
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form className="form-style form-order" id="form-order">
					{/* Контакти */}
					<div className="form-group">
						<h2 className="mt-none">Контакти:</h2>
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="name">
							<span className="required-label">Кому відправляти?</span>
						</label>
						<Field type="text" id="name" name="name" className="form-control" placeholder="ПІБ" />
						<ErrorMessage name="name" component="div" className="error" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="email">Email:</label>
						<Field type="email" id="email" name="email" className="form-control" placeholder="Email" />
						<ErrorMessage name="email" component="div" className="error" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="phone">
							<span className="required-label">Телефон:</span>
						</label>
						<Field type="tel" id="phone" name="phone" className="form-control" placeholder="+38 (___) __ - __ - ___" />
						<ErrorMessage name="phone" component="div" className="error" />
					</div>

					{/* Доставка */}
					<div className="form-group form-group--divider">
						<h2>Доставка:</h2>
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="town">
							<span className="required-label">Населений пункт:</span>
						</label>
						<Field type="text" id="town" name="town" className="form-control" placeholder="Місто доставки" />
						<ErrorMessage name="town" component="div" className="error" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="postOffice">
							<span className="required-label">Відділення нової пошти:</span>
						</label>
						<Field type="number" id="postOffice" name="postOffice" className="form-control" placeholder="№ відділення" />
						<ErrorMessage name="postOffice" component="div" className="error" />
					</div>

					{/* Оплата */}
					<div className="form-group form-group--divider">
						<h2>Оплата:</h2>
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="payment">
							<span className="required-label">Спосіб оплати:</span>
						</label>
						<Field as="select" name="payment" className="form-control form-select" id="payment">
							<option value="">Вибрати спосіб оплати</option>
							<option value="1">Онлайн оплата</option>
							<option value="2">Наложений платіж</option>
							<option value="3">Юридичним особам</option>
						</Field>
						<ErrorMessage name="payment" component="div" className="error" />
					</div>

					{/* Кнопка відправки */}
					<div className="form-group form-action">
						<button type="submit" className="btn w-fill" disabled={isSubmitting}>
							Оформити замовлення
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
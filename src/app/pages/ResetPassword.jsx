import { Link } from "react-router-dom";

export default function ResetPassword() {
	return (
		<div class="page-content page-content-auth">
			<div class="container">

				<h2 class="title-square title-square--icon">
					<Link to="/" class="title-square__icon">
						<svg class="icon icon-log-in"><use href="#icon-log-in"></use></svg>
					</Link>
					<span class="title-square__small"><Link to="/login" class="link-hover">Повернутися до авторизації</Link></span>
					<span class="title-square__main">
						<span class="link-item link-item-password-forgot active">Відновити пароль</span>
					</span>
				</h2>

				<form class="form-style form-auth" id="form-auth" action="admin/">

					<div class="form-group">
						<label class="form-label" for="email">Email:</label>
						<input type="email" id="email" name="email" class="form-control" placeholder="Введіть ваш email" />
					</div>

					<div class="form-group form-action">
						<button type="submit" class="btn w-fill">Відновити пароль</button>
					</div>
				</form>

			</div>
		</div>
	)
}
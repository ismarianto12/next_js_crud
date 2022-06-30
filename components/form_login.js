import React from 'react'
const FormLogin = ({ handleSubmit, handleChange, data }) => {
    console.log(data.username + ' Password :' + data.password)
    return (<>
        <div className="form-signin" style={{
            'float': 'center',
            'display': 'flex',
            'align-items': 'center',
            'padding-top': '40px',
            'padding-bottom': '40px',
            'background-color': '#ffff'

        }}>
            <form className='form-control' method='post' onSubmit={handleSubmit}>
                <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input className='form-control' type={'text'} name="username" onChange={handleChange} value={data.username}></input>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input className='form-control' type={'password'} name="password" onChange={handleChange} value={data.password}></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </div>

    </>)
}
export default FormLogin
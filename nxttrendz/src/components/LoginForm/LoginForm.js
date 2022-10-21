import {Component,PureComponent} from 'react'

class LoginForm extends PureComponent {
    

    state = {
            username:'',password:''
        }
    onChangeUsername =event=>{
        this.setState({username:event.target.value})
    }
    onChangePassword = event =>{
        this.setState({password:event.target.value})
    }

    renderPasswordField = () =>{
        const{password} = this.state
        return(
            <>
            <label className='input-label' htmlFor='password'>
                PASSWORD
            </label>
            <input type="text" id="password" 
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
            />
            </>
        )
    }

    renderUserNameField=()=>{
        const {username}=this.state
        return(
            <>
            <label className='input-label' htmlFor='username'>
                username
            </label>
            <input type="text" id="username" 
            className="username-input-field"
            value={username}
            onChange={this.onChangeUsername}
            />
            </>
        )
    }
    render() {
        return (
          <div className='login-form-container'>
            <form className='form-container'>
<img src="" alt='' className=''/>
<div className='input-container' >{this.renderUserNameField()}</div>
<div className='input-container'>{this.renderPasswordField()}</div>
<button type='submit' className='login-button'>
    Login
</button>
            </form>
          </div>  
        )
    }
}

export default LoginForm
import React from 'react';

const  Login = (props) => {
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } =props;
   
       return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                 type="text" 
                 autoFocus 
                 required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="errorMsg">{emailError}</p>
                      <label>Password</label>
                      <input
                      type="password"
                      requiredvalue={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="errorMsg">{passwordError}</p>
                      <div className="btnContainer">
                          {hasAccount ? (
                              <>
                              <button onClick={handleLogin}>Sign in</button>
                              <p>
                                  Nuk keni account?
                                  <span onClick={() => setHasAccount(!hasAccount)}>Sign un</span></p>
                              </>
                          ) : (
                              <>
                              <button onClick={handleSignup}>Sign up</button>
                              <p>
                                  Keni account?
                                  <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                              </>
                             )}
                      </div>
                </div>
     </section>
       ); 
    };
export default Login;
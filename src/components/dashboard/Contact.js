import React from 'react'


const Contact = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <h1>Contact</h1>
                    <div className="contactdiff">
                        <div className="col">
                            <div className="contactfont">
                                <p>If you have any recommendations to what movie or series i should write about next.
                                Feel free to use the contact information below or the contact form to the right.
                <br></br><br></br>
                    Mail: Movietime@Hotmail.com <br />
                        Phone: 59595959</p>
                            </div>
                        </div>


                        <div className="col">

                            <div className="contactfont">
                                <form>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Name</label>
                                        <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </form>
                            </div></div>
                    </div>

                </div>  </div>
        </div>
    )
}

export default Contact

import './components/Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Contact(){
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();
   // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
   // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    console.log(1);
     // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
     await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
     setForm({ name: "", email: "", message: "" });
    navigate("/");
  }
    return (
        <>
        <div id="contact-form" className="py-3" >
          <div className="container1">
            <h1 className="l-heading"><span className="text-primary">Contact</span> Us</h1>
            <p>Please fill out the form below to contact us </p>
            <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
              <input type="text" name="Name" id="name" className='form-control' value={form.name}  onChange={(e) => updateForm({ name: e.target.value })}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>  
              <input type="email" name="Email" id="email" className='form-control' value={form.email}  onChange={(e) => updateForm({ email: e.target.value })}/>
            </div>
              <div className="form-group" id="message">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={form.message} className='form-control' onChange={(e) => updateForm({ message:e.target.value })}></textarea>
              </div>
              <div className="form-group">
         <input
           type="submit"
           value="Submit"
           className="btn btn-primary"
         />
       </div>
              </form>
          </div>
          </div>
        </>
    );
}
export default Contact;
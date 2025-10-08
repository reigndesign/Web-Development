export  default function SignUpForm() {
  return(
    <>
      <form>
        <lable>First Name:</lable>
        <input placeholder="First Name" type="text"/>
        <label>Last Name: </label> 
        <input placeholder="Last Name" type="text" />
        <label>Phone Number: </label>
        <input placeholder="enter your pnone number" type="text" />

        <input type="button" value="submit" />
    </form>
    </>
  )
}       
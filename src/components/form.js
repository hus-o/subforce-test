export default function Form(){
    return(
        <div className="flex flex-col mx-10 md:mx-24">
        <h1 className="my-5 text-2xl md:text-5xl text-purple-400"><strong>CONTACT US</strong></h1>
        <p><strong>Would you like to add a game? Do you have any suggestions for us to improve?</strong></p>
        <p>Please fill in the form below:</p>
        <form className="flex flex-col xl:mx-72 h-72 justify-around">
            <input className="py-2 pl-1 bg-blue-50 shadow-inner" type="text" placeholder="Full Name" />
            <input className="py-2 pl-1 bg-blue-50 shadow-inner" type="email" placeholder="Email" />
            <textarea className="pl-1 bg-blue-50 h-24 shadow-inner" placeholder="Message"></textarea>
            <button className="bg-indigo-400 w-16 h-8 self-center" type="submit">SEND</button>
        </form>
        </div>
    )
}
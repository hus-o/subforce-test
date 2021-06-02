import Form from "./form";

export default function Games(){
    return(
        <div className="bg-gray-200 w-10/12 lg:w-8/12" >
        <div className="my-5 flex flex-col">
        <h1 className=" text-2xl md:text-5xl text-purple-400"><strong>OUR BEST GAMES</strong></h1>
        <hr className="bg-purple-400 h-0.5 w-8/12 self-center"/></div>
        <div className="flex flex-col md:flex-row justify-around items-center mb-5">

            <div className="flex flex-col items-center mb-2 md:mb-0">
                    <img className="w-34" src="\finishflag.png" alt="finish flag"/>
            <h5 className="text-purple-400"><strong>Mario Kart Tour</strong></h5>
            <p className="text-center w-1/2">Lorem Ipsum dolor sit aamer, consecturur adipsicing elit, sed do eurmsod tempor</p></div>

            <div className="flex flex-col items-center mb-2 md:mb-0">
                    <img className="w-34" src="\pokeball.png" alt="pokeball"/>
            <h5 className="text-purple-400"><strong>Pokemon Go</strong></h5>
            <p className="text-center w-1/2">Lorem Ipsum dolor sit aamer, consecturur adipsicing elit, sed do eurmsod tempor</p></div>

            <div className="flex flex-col items-center mb-2 md:mb-0">
                    <img className="w-34" src="\tree.png" alt="tree"/>
            <h5 className="text-purple-400"><strong>Animal Crossing NH</strong></h5>
            <p className="text-center w-1/2">Lorem Ipsum dolor sit aamer, consecturur adipsicing elit, sed do eurmsod tempor</p></div>
        </div>

        <div className="flex flex-col items-center mb-5">
        <h1 className="my-5text-xl md:text-4xl text-purple-400"><strong>Do you want to share your friend codes?</strong></h1>
        <p className="text-lg md:text-xl w-8/12">This website has been is created to find active friend codes. Don't wait any longer! Find friends in the games you like and share your own friend code.</p>
        </div>
        <div className="flex flex-col items-start mx-10">
            <h2 className="text-lg md:text-2xl text-purple-400 mb-5"><strong>MAIN GAMES</strong></h2>
            <div>
                <div className="flex flex-col">
                    <div className="flex flex-col xl:flex-row mb-2 lg:mb-10">
                        <div className="flex flex-col lg:mr-2 xl:w-2/4 md:flex-row md:h-48 mb-5 xl:mb-0">

                        <img className="mr-2 h-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                        <div className="text-left mt-1 md:mt-0 md:w-8/12">
                            <h2 className="text-purple-400 md:text-xl"><strong>Mario Kart Tour</strong></h2>
                            <p className="md:text-lg"> Mario and his friends compete against each other on circuits inspired by cities around the world in this new Mario Kart! Each two-week season has its own set of new circuits...</p>
                        </div>

                        </div>

                        <div className="flex flex-col md:flex-row md:h-48 mb-5 xl:w-2/4 xl:mb-0">

                        <img className="mr-2 h-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                        <div className="text-left mt-1 md:mt-0 md:w-8/12">
                        <h2 className="text-purple-400 md:text-xl"><strong>Pokemon Go</strong></h2>
                            <p className="md:text-lg"> Move from the real world to the virtual world of Pokémon with Pokémon GO for iPhone and Android. With Pokémon GO, Pokémon will take you to a whole new world! It's yours!</p>
                        </div>
                        
                        </div>

                    </div>
                    
                    <div className="flex flex-col xl:flex-row mb-2 xl:my-10">
                        <div className="flex flex-col lg:mr-2 xl:w-2/4 md:flex-row md:h-48 mb-5 xl:mb-0">
                            <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                        <div className="text-left mt-1 md:mt-0 md:w-8/12">
                            <h2 className="text-purple-400 md:text-xl"><strong>AppNana</strong></h2>
                            <p className="md:text-lg">Swap your AppNana friend code to get cards credits. Get Any Paid App For Free. Members Earned Over $10 Million in Games Gift Card Credits.</p>
                        </div>
                        </div>

                    <div className="flex flex-col md:flex-row md:h-48 mb-5 xl:w-2/4 xl:mb-0">
                        <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                        <div className="text-left mt-1 md:mt-0 md:w-8/12">
                            <h2 className="text-purple-400 md:text-xl"><strong>Board King</strong></h2>
                            <p className="md:text-lg"> Swap your Board Kings friend code! Join your friends and family in our brand new mingle-play board game experience! The dice will determine where you go!</p>
                        </div>
                        </div>
                    </div>


                    <div className="flex flex-col xl:flex-row mb-2 xl:my-10">
                        <div className="flex flex-col lg:mr-2 xl:w-2/4 md:flex-row md:h-48 mb-5 xl:mb-0">
                            <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                    <div className="text-left mt-1 md:mt-0 md:w-8/12">
                        <h2 className="text-purple-400 md:text-xl"><strong>My Singing Monsters</strong></h2>
                        <p className="md:text-lg">Swap your Singing Monsters friend code! Breed your Monsters to create charming new species. With so many singing Monstersto collect and more Monsters added all the time...</p>
                    </div>
                    </div>


                    <div className="flex flex-col md:flex-row md:h-48 mb-5 xl:w-2/4 xl:mb-0">
                        <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                    <div className="text-left mt-1 md:mt-0 md:w-8/12">
                    <h2 className="text-purple-400 md:text-xl"><strong>Pokemon Master EX</strong></h2>
                        <p className="md:text-lg">Trainers partner up with Pokémon to become sync pairs, forming bonds of friendship tocarry them to victory! Get new friends in Pokémon Master EX. Win all your Pokemon Master EX.</p>
                    </div> 
                    </div>
                    </div>

                    <div className="flex flex-col xl:flex-row mb-2 xl:my-10">
                        <div className="flex flex-col lg:mr-2 xl:w-2/4 md:flex-row md:h-48 mb-5 xl:mb-0">
                            <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                    <div className="text-left mt-1 md:mt-0 md:w-8/12">
                        <h2 className="text-purple-400 md:text-xl"><strong>Call of Duty Mobile</strong></h2>
                        <p className="md:text-lg">Mario and his friends compete against each other on circuits inspired by cities around the world in this new Mario Kart! Each two-week season has its own set of new circuits...</p>
                    </div></div>


                    <div className="flex flex-col md:flex-row md:h-48 mb-5 xl:w-2/4 xl:mb-0">
                        <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                    <div className="text-left mt-1 md:mt-0 md:w-8/12">
                    <h2 className="text-purple-400 md:text-xl"><strong>Animal Crossing NH</strong></h2>
                        <p className="md:text-lg">Here the locals, very cute animals, walk around all day long. They exchange gifts from paw to paw, do their shopping in total peace and quiet, stroll quietly in the museum. Find new friends...</p>
                    </div> 
                    </div></div>

                    <div className="flex flex-col xl:flex-row mb-2 xl:my-10">
                        <div className="flex flex-col lg:mr-2 xl:w-2/4 md:flex-row md:h-48 mb-5 xl:mb-0">
                            <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                    <div className="text-left mt-1 md:mt-0 md:w-8/12">
                        <h2 className="text-purple-400 md:text-xl"><strong>Nintendo Switch</strong></h2>
                        <p className="md:text-lg">The Nintendo Switch can be transformed to suit your situation, so you can enjoy your games no matter how busy you are. It's a new era where you no longer have to adapt your...</p>
                    </div></div>


                    <div className="flex flex-col md:flex-row md:h-48 mb-5 xl:w-2/4 xl:mb-0">
                        <img className="mr-2 h-48 w-48 self-center md:h-full md:self-start" src="https://source.unsplash.com/WLUHO9A_xik/175x175" alt="placeholder" />
                    <div className="text-left mt-1 md:mt-0 md:w-8/12">
                    <h2 className="text-purple-400 md:text-xl"><strong>Pokemon Sword and Shield</strong></h2>
                        <p className="md:text-lg">The Galar region is home to a large number of Pokémon species. They have not yet revealed all their secrets, and many biologists continue to study them every day to learn more...</p>
                    </div> 
                    </div></div>

                </div>
            </div>
        </div>
        <Form />
        </div>
    )
}
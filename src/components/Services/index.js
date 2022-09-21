import { ServiceCard } from "../common/ServiceCard"

const Services = ({services}) => {
    return (
        <section className="text-skin-base font-poppins" id="Services">
            <div className="container px-5 py-24 mx-auto text-center">
                <h1 className="text-skin-base text-lg md:text-4xl font-semibold p-10 uppercase">
                    What I can provide.
                </h1>
                    {services.map((service) => (<ServiceCard key={service.id.toString()} name={service.name}  description={service.description} image={service.image} id={service.id}/>))}
            </div>
        </section>
    )
}

export default Services;
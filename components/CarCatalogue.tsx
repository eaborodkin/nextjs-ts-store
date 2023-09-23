import {CarCard, CustomFilter, SearchBar} from "@/components/index"
import {fetchCars} from "@/utils"

const CarCatalogue = async () => {
    const allCars = await fetchCars()

    const isEmptyCars = !Array.isArray(allCars) || allCars.length < 1 || !allCars

    return (
        <div className="mt-12 max-width padding-x padding-y" id="discover">
            <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">Car catalogue</h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className="home__filters">
                <SearchBar/>

                <div className="home__filter-container">
                    <CustomFilter title="fuel"/>
                    <CustomFilter title="year"/>
                </div>
            </div>
            <div className="home__cars">
                {!isEmptyCars ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars.map(car => <CarCard car={car}/>)}
                        </div>
                    </section>
                ): (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">
                            Ooops, no results!
                        </h2>
                        <p>{allCars?.message}</p>
                    </div>
                )
                }
            </div>
        </div>
    )
}
export default CarCatalogue

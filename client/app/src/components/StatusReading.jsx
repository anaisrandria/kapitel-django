import BookCard from "./BookCard"

function StatusReading({ books, setBooks }) {

    return (
        <div className="pt-4 pb-10 w-full border-x-0 border-t-0 border-y border-gray-200 gap-2">
            <h2 className="text-2xl">Mes lectures du moment</h2>
            <p className="text-xs text-gray-400">Les livres que je suis en train de lire. </p>
            <div className="mt-8 flex gap-6 w-[80vw] overflow-x-auto">
                
            </div>
        </div>
    )
}

export default StatusReading
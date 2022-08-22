import { Rating } from "flowbite-react/lib/esm/components"

const Rate = () => {
   return (
    <Rating>
        <Rating.Star />
        <p className="ml-2 text-sm font-bold text-white dark:text-white">
            4.95
        </p>
        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
        <a
            href="#"
            className="text-sm font-medium text-white underline hover:no-underline text-white"
        >
            73 reviews
        </a>
    </Rating>
   )
}
export default Rate
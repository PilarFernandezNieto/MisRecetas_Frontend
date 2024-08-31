import { generateClasses } from "@formkit/themes"

const config = {
    config: {
        classes: generateClasses({
            global: {
                label: "block mb-1 font-bold text-lg",
                message: "text-red-500 mb-3",
                wrapper: "space-y-2 mb-2",
                input: "w-full p-3 border border-gray-300 rounded text-gray-700 placelholder-gray-400"
            },
  
            submit: {
                input: "$reset bg-amber-400 hover:bg-amber-500 rounded w-full p-2 font-bold uppercase disable:opacity-50 transition-all"
            }
        })

    }
}

export default config
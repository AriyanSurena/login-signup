interface ContainerProps {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
    return(
    <main className={`flex flex-col p-4 my-4 mx-auto rounded transition duration-1000 bg-[aliceblue] w-full sm:w-[100%] md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[40%] dark:bg-[#222222]`}>
        {children}
    </main>
    )
}
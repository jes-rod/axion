'use server'
//This file is to call path revalidations from client components

import { revalidatePath } from "next/cache";

const revalidate = async () => {
    revalidatePath('/' , 'layout');
}

export { revalidate }
import {ref} from 'vue';
import type Post from "~/types/Post";

export const getPosts = () => {
    const postData = ref<Post[]>([]);
    const paginatedData =  ref<Post[]>([]);
    const isLoading = ref<boolean>(false);
    const currentPage = ref<number>(1);
    const itemsPerPage = 8;

    const fetchData = async () => {
        isLoading.value = true;
        const response = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');
        postData.value = await response.json();
        paginateData();
        isLoading.value = false;
    };

    const paginateData = () => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = currentPage.value * itemsPerPage;
        paginatedData.value = postData.value.slice(start, end);
    };

    return {
        postData,
        paginatedData,
        currentPage,
        itemsPerPage,
        fetchData,
        paginateData,
        isLoading
    };
};

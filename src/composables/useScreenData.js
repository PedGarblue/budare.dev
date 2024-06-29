export function useScreenData() {
    const getViewType = () => {
        if (window.innerWidth < 768) {
            return 'mobile'
        } else if (window.innerWidth < 1024) {
            return 'lg'
        } else if (window.innerWidth < 1536) {
            return 'xl'
        } else {
            return '2xl'
        }
    }

    return {
        getViewType,
    }
}
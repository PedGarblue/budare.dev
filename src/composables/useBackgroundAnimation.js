export default function useBackgroundAnimation() {
  const isMobileView = window.innerWidth < 768;

  return {
    isMobileView,
  };
}

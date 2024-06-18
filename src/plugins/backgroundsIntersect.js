export default {
    observer: null,
    triggers: new Map(),
    renderProcesses: new Map(),
    _currentIntersecting: null,

    get currentIntersecting() {
        return this._currentIntersecting;
    },

    set currentIntersecting(value) {
        this._currentIntersecting = value;
    },
        
    install(app, options) {
        let intersectObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        };

        let callback =  (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (this.renderProcesses.has(entry.target)) {
                        return;
                    }
                    this.currentIntersecting = entry.target;
                    const processId = this.triggers.get(entry.target)();
                    this.renderProcesses.set(entry.target, processId);
                } else {
                    const processId = this.renderProcesses.get(entry.target);
                    if (processId) {
                        cancelAnimationFrame(processId);
                        this.renderProcesses.delete(entry.target);
                    }
                }
            });
        };

        this.observer = new IntersectionObserver(callback, intersectObserverOptions);

        app.provide('backgroundsIntersect', (el, renderTrigger) => {  
            this.observer.observe(el);
            this.triggers.set(el, renderTrigger);
        })

        app.provide('backgroundIsIntersecting', (el) => {
            return this.currentIntersecting === el;
        })
    }
}
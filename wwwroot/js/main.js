
(function () {

    function setupTabs() {
        var triggerTabList = [].slice.call(document.querySelectorAll('#addProject a'))
        triggerTabList.forEach(function (triggerEl) {
            var tabTrigger = new bootstrap.Tab(triggerEl)

            triggerEl.addEventListener('click', function (event) {
                event.preventDefault()
                tabTrigger.show()
            })
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupTabs();
    });

})();
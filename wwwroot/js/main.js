
"use strict";

(function ($) {

    var steps = ['#project-details', '#keywords', '#location-search-engines', '#competitors', '#completed'];

    function setupTabs(tabsId, allowTabSwitching) {
        var triggerTabList = [].slice.call(document.querySelectorAll(tabsId + ' a'));

        triggerTabList.forEach(function (triggerEl) {
            if (!allowTabSwitching) {
                $(triggerEl).addClass('disabled');
            }
        });

    }

    function setupWizardButtons() {
        for (var i = 0; i < steps.length - 1; i++) {
            var $nextBtn = $(steps[i] + ' .awr-wizard-actions .awr-next-step-btn');
            if ($nextBtn) {
                $nextBtn.on('click', { next: steps[i+1], current: steps[i] }, function (event) {   
                    $('a[href="' + event.data.current + '"]').addClass('completed');
                    activateTab(event.data.next);
                });
            }
        }

        for (var i = 1; i < steps.length; i++) {
            var $previousBtn = $(steps[i] + ' .awr-wizard-actions .awr-previous-step-btn');
            if ($previousBtn) {
                $previousBtn.on('click', { next: steps[i-1], current: steps[i] }, function (event) {                    
                    $('a[href="' + event.data.next + '"]').removeClass('completed');
                    activateTab(event.data.next);
                });
            }
        }
    }


    function activateTab(tabToActivate) {
        var triggerEl = $('#addProject a[href="' + tabToActivate + '"]');
        bootstrap.Tab.getOrCreateInstance(triggerEl).show();
    }

    $(function () {
        setupTabs('#addProject', false);
        setupTabs('#deviceType', true);

        setupWizardButtons();
    });

})(jQuery);
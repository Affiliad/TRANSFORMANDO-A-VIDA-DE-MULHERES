jQuery(document) .ready (function() {
    var $jQuery = jQuery.noConflict();

    // Divi Form
    if ($jQuery('.et_pb_contact_form').length) {
        // Load intlTelInput
        const input = document.querySelector("#et_pb_contact_whatsapp_0");
        window.intlTelInput(input, {
            initialCountry: "auto",
            strictMode: true,
            separateDialCode: true,
            geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("br"));
            },
            hiddenInput: function(telInputName) {
            return {
                phone: "whatsapp_full",
                country: "country_code"
            };
            },
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
        });
    }

    // Elementor Form - Check if element id form-field-whatsapp exists 
    if ($jQuery('#form-field-whatsapp').length) {
        // Change size input field
        $jQuery('#form-field-whatsapp').attr('size', 100);
        
        var form_notif_popup = $jQuery('#form_notif_popup');
        
        // Elementor Popup
        if (form_notif_popup.length) {
            jQuery(document).on("elementor/popup/show", function() {
                var input = document.querySelector("#form-field-whatsapp");
                window.intlTelInput(input, {
                    initialCountry: "auto",
                    strictMode: true,
                    separateDialCode: true,
                    geoIpLookup: callback => {
                        fetch("https://ipapi.co/json")
                        .then(res => res.json())
                        .then(data => callback(data.country_code))
                        .catch(() => callback("br"));
                    },
                    hiddenInput: function(telInputName) {
                    return {
                        phone: "whatsapp_full",
                        country: "country_code"
                    };
                    },
                    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
                });

                $jQuery('#form-field-whatsapp').on('blur', function() {
                    var whatsapp = $jQuery("#form-field-whatsapp").val();
                    var dialCode = $jQuery(".iti__selected-dial-code").html();

                    var phoneFull = dialCode + whatsapp;

                    $jQuery("#form-field-whatsapp_full").val(phoneFull)
                });
            });
        }

        // Not is popup
        if (form_notif_popup.length == 0) {
            $jQuery('#form-field-whatsapp').on('blur', function() {
                var whatsapp = $jQuery("#form-field-whatsapp").val();
                var dialCode = $jQuery(".iti__selected-dial-code").html();
    
                var phoneFull = dialCode + whatsapp;
    
                $jQuery("#form-field-whatsapp_full").val(phoneFull)
            });

            // Load intlTelInput
            const input = document.querySelector("#form-field-whatsapp");
            window.intlTelInput(input, {
                initialCountry: "auto",
                strictMode: true,
                separateDialCode: true,
                geoIpLookup: callback => {
                    fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("br"));
                },
                hiddenInput: function(telInputName) {
                return {
                    phone: "whatsapp_full",
                    country: "country_code"
                };
                },
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
            });

        }
    }

    // Contact Form 7 - Check if element input name whatsapp exists 
    if ($jQuery('.wpcf7-form').length) {
        // Change size input field
        $jQuery('input[name=whatsapp]').attr('size', 100);

        // Load intlTelInput
        const input = document.querySelector("input[name=whatsapp]");
        window.intlTelInput(input, {
            initialCountry: "auto",
            strictMode: true,
            separateDialCode: true,
            geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("br"));
            },
            hiddenInput: () => ({ phone: "whatsapp_full", country: "country_code" }),
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
        });

        jQuery("input[name=whatsapp]").blur(function() {
            var whatsapp = $jQuery("input[name=whatsapp]").val();
            var dialCode = $jQuery(".iti__selected-dial-code").html();
            $jQuery("input[name=whatsapp_full]").val(dialCode + whatsapp);
        });
    }
});

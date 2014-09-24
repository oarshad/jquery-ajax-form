/*
 * jQuery.ajax-form v1.0
 */
(function($){
    $.fn.ajaxForm = function(options) {

        var o = $.extend({
            beforeSubmit: null,
            onSuccess: null,
            onFailure: null,
            onComplete: null,
            acceptsJson: true
        }, options);

        var _callMethod = function(_method, _argument) {if (typeof _method == "function") { _method(_argument);}};

        return this.each(function() {
            if (!$(this).is("form")) {
                return false;
            }

            var _form = $(this);

            $(this).submit(function() {
                _callMethod(o.beforeSubmit);
                var _iframe = $("<iframe/>")
                    .css({
                        "visibility": "hidden",
                        "position": "absolute",
                        "width": "10px",
                        "height": "10px",
                        "left": "-10px",
                        "top": "-10px"
                    })
                    .uniqueId()
                    .attr("name", _iframe.attr("id"))
                    .appendTo("body")
                    .load(function(){
                        $(_form).removeAttr("target");
                        var _ajaxString = $("[name='" + _iframe.attr("id") + "']")
                            .contents().find("body").text();
                        if (!o.acceptsJson) {
                            _callMethod(on.onSuccess, _ajaxString);
                            return;
                        }
                        try {
                            var _data = JSON.parse(_ajaxString);
                            _callMethod(o.onSuccess, _data);
                        }catch (_err) {
                            _callMethod(o.onFailure);
                        }
                        _callMethod(o.onComplete);
                        setTimeout(function() {
                            $("[name='" + _iframName + "']").remove();
                        }, 0);
                    });

                $(_form).attr("target", $(iframe).attr("id"));
            });
        });
    };
})(jQuery);
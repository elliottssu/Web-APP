function selectQuestion(i) {
    var e = '<div class="topic-type-content topic-type-question after-clear"><div class="col-md-1 col-md-offset-1 col-xs-2"><span class="question-id pull-left" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N">1</span></div><div class="col-md-9 col-xs-10">'
      , t = parseInt(absolute_id) + 1;
    switch (absolute_id++,
    choice_absolute_id[t] || (choice_absolute_id[t] = 0),
    i) {
        case "radio":
            choice_absolute_id[t]++;
            var s = choice_absolute_id[t];
            e += '<div class="question-title" type="6" name="radio-question"><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">单项选择题</div></div></div><ul class="question-choice"><li class="choice" has_other="N" choice_absolute_id=' + s + ' ><div class="radio radio-warning p-l-5"><input type="radio" name="radio"><label class="edit-area edit-child-element" contenteditable="true" content-default="1">选项1</label></div></li>',
            choice_absolute_id[t]++,
            s = choice_absolute_id[t],
            e += '<li class="choice" has_other="N" choice_absolute_id=' + s + '><div class="radio radio-warning p-l-5"><input type="radio" name="radio"><label class="edit-area edit-child-element" contenteditable="true" content-default="1">选项2</label></div></li></ul>',
            e += '<div class="add-area visible-hide"><ul><li class="add-choice" title="增加选项" onclick="edit.addQuestion(this)"></li></ul></div>',
            e += '<div class="operate visible-hide" ><ul><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case "core":
            choice_absolute_id[t]++;
            var s = choice_absolute_id[t];
            e += '<div class="question-title" type="1" name="core-question"><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">核心测量题</div><select class="selectpicker" data-style="btn-danger btn-custom"><option>创新</option><option>诚信</option><option>合作</option><option>友善</option><option>责任心</option><option>激情</option></select></div></div><div class="survey-question-check m-l-19"><div class="radio radio-warning"><input type="radio" name="radio"><label >极不同意</label></div><div class="radio radio-warning"><input type="radio" name="radio"><label >不同意</label></div><div class="radio radio-warning"><input type="radio" name="radio"><label >一般</label></div><div class="radio radio-warning "><input type="radio" name="radio"><label >同意</label></div><div class="radio radio-warning "><input type="radio" name="radio"><label >非常同意</label></div></div>',
            e += '<div class="operate visible-hide" ><ul><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case "checkbox":
            choice_absolute_id[t]++;
            var s = choice_absolute_id[t];
            e += '<div class="question-title" type="8" name="checkbox-question"><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">多项选择题</div></div></div><ul class="question-choice"><li class="choice" has_other="N" choice_absolute_id=' + s + '><div class="checkbox checkbox-warning checkbox-circle p-l-5"><input type="checkbox" name="checkbox"><label class="edit-area edit-child-element" contenteditable="true" content-default="1">选项1 </label></div></li>',
            choice_absolute_id[t]++,
            s = choice_absolute_id[t],
            e += '<li class="choice" has_other="N" choice_absolute_id=' + s + '><div class="checkbox checkbox-warning checkbox-circle p-l-5"><input type="checkbox" name="checkbox"><label class="edit-area edit-child-element" contenteditable="true" content-default="1">选项2 </label></div></li></ul>',
            e += '<div class="add-area visible-hide"><ul><li class="add-choice" title="增加选项" onclick="edit.addQuestion(this)"></li></ul></div>',
            e += '<div class="operate visible-hide" ><ul><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case "multi-input":
            e += '<div class="question-title" type="2" name="multi-input-question"><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true" content-default="1">主观问答题</div></div></div><ul class="question-choice"><li class="auto-height"><textarea name="multi-input" class="multi-input"></textarea></li></ul>',
            e += '<div class="operate visible-hide"><ul><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case "select":
            var s;
            e += '<div class="question-title" type="7" name="select-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true">选择列表</div></div></div><select class="question-choice" style="  padding: 0;margin: 15px 0 20px 35px;">';
            for (var a = 1; 4 > a; a++)
                choice_absolute_id[t]++,
                s = choice_absolute_id[t],
                e += '<option class="choice" has_other="N" choice_absolute_id=' + s + ">选项" + a + "</option>";
            e += '</select><span class="edit-select" style="  width: 60%;display: inline-block;line-height: 30px;" onclick="edit.editSelect(this)">编辑选项</span>',
            e += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>'
    }
    e += "</div></div>",
    $("#question-box").append(e),
    edit.sortQuestions(),
    edit.attachLayer(),
    edit.updateChoiceShowLogic(),
    edit.scrollBox(),
    edit.visibleHandle(),
    elementInit()
}

function elementInit() {
    $(".edit-area").focus(function () {
        $("div, td, li").removeClass("edit-area-active"),
        $(this).hasClass("edit-area-active") || $(this).addClass("edit-area-active"),
        activeFocus(),
        $(this).after($(".edit-img")),
        $(".edit-img").css($(this).hasClass("qs-content") || $(this).hasClass("title-content") ? {
            width: "30px"
        } : $(this).hasClass("matrix-choice") ? {
            width: "65px"
        } : $(this).parents("td").hasClass("radio_array_title") || $(this).parents("li").hasClass("select_choice") ? {
            width: "95px"
        } : {
            width: "155px"
        }),
        $(".edit-img").show(),
        $(".edit-area").css({
            background: "#fff",
            border: "none"
        }),
        $(".title-content").css({
            //border: "1px solid #dbdbdb"
        }),
        $(this).css({
            background: "#fdf9cd",
            
            //border: "1px solid #333"
        }),
        $(this).hasClass("edit-title") ? ($(".upload-element-img").show(),
        $(".handle-element").hide()) : $(this).parents("td").hasClass("radio_array_title") || $(this).parents("li").hasClass("select_choice") ? ($(".handle-element").show(),
        $(".handle-child-element").hide(),
        $(".upload-element-img").hide()) : $(this).hasClass("matrix-choice") ? ($(".handle-element").show(),
        $(".up-child-element").hide(),
        $(".down-child-element").hide(),
        $(".upload-element-img").hide()) : $(this).hasClass("title-content") ? $(".edit-img").hide() : $(this).hasClass("desc-content") ? ($(".edit-img").css({
            width: "30px"
        }),
        $(".handle-element").hide()) : ($(".upload-element-img").show(),
        $(".handle-element").show());
        var i = $.trim($(this).html());
        $(this).hasClass("edit-title") && edit.isDefaultQuestion(i) && ($(this).attr("data-value", $(this).html()),
        $(this).html("")),
        ($(this).hasClass("edit-child-element") || $(this).hasClass("choice")) && edit.isDefaultChoice(i) && ($(this).attr("data-value", $(this).html()),
        $(this).html(""))
    }),
    $(".edit-area").blur(function () {
        if ("" == $.trim($(this).html())) {
            var i = $(this).attr("data-value");
            $(this).html(i)
        }
        edit.saveSurvey()
    }),
    $(".edit-area").hover(function () {
        $(this).hasClass("edit-area-active") || $(this).css({
            background: "#fdf9cd"
        })
    }, function () {
        $(this).hasClass("edit-area-active") || $(this).css({
            background: "#fff"
        })
    }),
    $(".edit-area").on("paste", function () {
        var i = $(this);
        setTimeout(function () {
            var e = i.text();
            e = e.replace(/<[^<]*>/g, ""),
            i.text(e)
        }, 0)
    })
}

function activeFocus() {
    $(".choice .edit-area").css({
        display: "inline-block"
    }),
    $(".choice .edit-area-active").css({
        display: "inline-block"
    })
}
//核心 工具的实现
var edit = function () {
    function i() {
        $(".topic-type-content").each(function () {
            var i = $(this).index();
            i += 1,
            $(this).find(".question-id").attr("order", i);
            var e = $(this).prevAll(".topic-page").length;
            e += 1,
            $(this).find(".question-id").attr("page", e);
            var t = $(this).find(".question-title").attr("name")
              , s = $("#question-box").find(".topic-page").length;
            s += 1;
            var a;
            "page" === t ? ($(this).find(".page-area").html("页码:" + e + "/" + s),
            a = 0) : "description" === t ? a = 0 : (a = $(this).prevAll(".topic-type-question").length,
            a += 1,
            $(this).find(".question-id").html("" + a),//去掉Q
            "Y" == $(this).find(".question-id").attr("question-required") && 0 == $(this).find(".required").length && $(this).find(".question-id").before('<span class="required"></span>')),//去掉*
            $(this).find(".question-id").attr("index", a),
            $("#page-tail").html("页码:" + s + "/" + s)
        })
    }
    function e() {
        $(".attach-left").css({
            top: $(".rows2").offset().top,
            width: $(".rows2").offset().left,
            height: $(".rows2").height(),
            left: 0
        }),
        $(".attach-right").css({
            top: $(".rows2").offset().top,
            right: 0,
            width: $(window).width() - $(".rows2").offset().left - $(".rows2").width(),
            height: $(".rows2").height()
        })
    }
    function t() {
        logic_condition_relation && $.each(logic_condition_relation, function (i, e) {
            $("#question-box").find('[absolute_id="' + i + '"]').parents(".question-title").siblings(".question-choice").find(".choice_show_logic_show_questions").remove(),
            e && $.each(e, function (e, t) {
                if (t) {
                    var s = '<span class="choice_show_logic_show_questions">显示'
                      , a = 0;
                    $.each(t, function (i, e) {
                        e > 0 && (a = 1,
                        s += $('[absolute_id="' + i + '"]').html() + "&nbsp")
                    }),
                    $("#question-box").find('[absolute_id="' + i + '"]').parents(".question-title").siblings(".question-choice").find('[choice_absolute_id="' + e + '"]').find(".choice_show_logic_show_questions").remove(),
                    s += "</span>";
                    var o = $("#question-box").find('[absolute_id="' + i + '"]').parents(".question-title").attr("type");
                    !a || "6" != o && "8" != o || $("#question-box").find('[absolute_id="' + i + '"]').parents(".question-title").siblings(".question-choice").find('[choice_absolute_id="' + e + '"]').append(s)
                }
            })
        })
    }
    function s() {
        var i = arguments[0] ? arguments[0] : 0
          , e = {};
        e.survey_id = survey_init.survey_id,
        e.survey_name = $(".title-content").html(),
        e.test_content = $(".desc-content").html(),
        e.status = i,
        e.content = [],
        e.survey_logic = {},
        e.survey_logic.logic_condition_relation = logic_condition_relation,
        e.survey_logic.logic_show_relation = logic_show_relation,
        $(".topic-type-content").each(function () {
            var i = {};
            i.survey_id = survey_init.survey_id,
            i.content = $(this).find(".qs-content").html(),
            i.type_id = $(this).find(".question-title").attr("type"),
            i.order = $(this).find(".question-id").attr("order"),
            i.has_other = $(this).find(".question-id").attr("has_other"),
            i.required = $(this).find(".question-id").attr("question-required"),
            i.page = $(this).find(".question-id").attr("page"),
            i.index = $(this).find(".question-id").attr("index"),
            i.absolute_id = $(this).find(".question-id").attr("absolute_id"),
            i.last_absolute_id = absolute_id,
            i.last_choice_absolute_id = choice_absolute_id;
            var t = 0;
            logic_show_relation && logic_show_relation[i.absolute_id] && $.each(logic_show_relation[i.absolute_id], function (i, e) {
                return e && ($.each(e, function (i, e) {
                    return e > 0 ? (t = 1,
                    !1) : void 0
                }),
                t) ? !1 : void 0
            }),
            i.logic_hide = t;
            switch (i.type_id) {
                case "6":
                    i.choice = a($(this), i.type_id);
                    break;
                case "8":
                    var s = $(this).find(".question-id").attr("min");
                    i.min = "" !== s && "undefined" !== s && null !== s && void 0 !== s ? s : "";
                    var l = $(this).find(".question-id").attr("max");
                    i.max = "" !== l && "undefined" !== l && null !== l && void 0 !== l ? l : "",
                    i.choice = a($(this), i.type_id);
                    break;
                case "7":
                    i.choice = a($(this), i.type_id);
                    break;
                case "9":
                    i.choice = a($(this), i.type_id),
                    i.radio_array_title = o($(this))
            }
            e.content.push(i)
        });
       // var t = CA.baseUrlModule + "home/createSurveyQuestion";
        $.ajax({
            type: "post",
            url: t,
            data: JSON.stringify(e),
            contentType: "application/json",
            traditional: !0,
            success: function (e) {
                var t = $.parseJSON(e);
                0 === i && 0 === t.error_code ? $(".time-save").css({
                    top: $(window).scrollTop(),
                    left: $(window).width() / 2
                }).fadeIn(300).fadeOut(2e3) : 1 === i && 0 === t.error_code && (location.href = CA.baseUrlModule + "home/surveyFilter?survey_id=" + survey_init.survey_id)
            }
        })
    }
    function a(i, e) {
        var t = [];
        return i.find(".choice").each(function () {
            var i = {};
            if ("9" == e) {
                i.order = $(this).parents("td").index();
                var s = $(this).html();
                i.choice_absolute_id = $(this).parents("td").index()
            } else if ("7" == e) {
                i.order = $(this).index() + 1;
                var s = $(this).html();
                i.choice_absolute_id = $(this).attr("choice_absolute_id")
            } else {
                i.order = $(this).index() + 1;
                var s = $(this).find(".edit-area").html();
                i.choice_absolute_id = $(this).attr("choice_absolute_id")
            }
            i.content = s,
            i.is_other = $(this).attr("has_other"),
            t.push(i)
        }),
        t
    }
    function o(i) {
        var e = [];
        return i.find(".radio_array_title").each(function () {
            var i = {};
            i.order = $(this).parent().index(),
            i.content = $(this).find(".edit-area").html(),
            e.push(i)
        }),
        e
    }
    function l() {
        var i = $("#question-box").find(".topic-type-content").length;
        i > 3 && $("html, body").animate({
            scrollTop: $("#edit-survey-content").height() - 200
        }, "slow")
    }
    function n() {
        $(".topic-type-content").hover(function () {
            $(".add-area, .operate").removeClass("visible-show").addClass("visible-hide"),
            $(this).find(".add-area, .operate").removeClass("visible-hide").addClass("visible-show")
        })
    }
    //复制
    function c(e) {
        var t = $(e).parents(".topic-type-content");
        t.after(t.clone());
        var a = parseInt(absolute_id) + 1;
        $(e).parents(".topic-type-content").next().find(".question-id").attr("absolute_id", a),
        absolute_id++,
        $(e).parents(".topic-type-content").next().find(".choice_show_logic_show_questions").remove(),
        choice_absolute_id[a] = 0,
        $(e).parents(".topic-type-content").next().find(".choice").each(function () {
            $(this).attr("choice_absolute_id") > choice_absolute_id[a] && (choice_absolute_id[a] = $(this).attr("choice_absolute_id"))
        }),
        i(),
        s(),
        n(),
        elementInit()
    }
    //删除
    function d(i) {
        var e = $(i).parents(".topic-type-content")
          , t = e.find(".question-id").attr("absolute_id");
        e.remove(),
        edit.sortQuestions(),
        edit.removeLogicCondition(t, e),
        edit.saveSurvey()
    }
    //function d(i) {
    //    $("#question-box").append($(".edit-img")),
    //    require.async(["js/url/operate-popup.js"], function (e) {
    //        e.show("删除此题卡", "确定", "取消").then(function () {
    //            var e = $(i).parents(".topic-type-content")
    //              , t = e.find(".question-id").attr("absolute_id");
    //            e.remove(),
    //            edit.sortQuestions(),
    //            edit.removeLogicCondition(t, e),
    //            edit.saveSurvey()
    //        })
    //    })
    //}
    function r(i, e) {
        logic_condition_relation && logic_condition_relation[i] && !$.isEmptyObject(logic_condition_relation[i]) && logic_show_relation && logic_show_relation[i] && !$.isEmptyObject(logic_show_relation[i]) ? (delete logic_condition_relation[i],
        delete logic_show_relation[i],
        $.each(logic_show_relation, function (e, t) {
            t && $.each(t, function (t) {
                t == i && (delete logic_show_relation[e][t],
                $.isEmptyObject(logic_show_relation[e]) && delete logic_show_relation[e])
            })
        }),
        $.each(logic_condition_relation, function (e, t) {
            t && $.each(t, function (t, s) {
                s && $.each(s, function (s) {
                    s == i && (delete logic_condition_relation[e][t][s],
                    $.isEmptyObject(logic_condition_relation[e][t]) && delete logic_condition_relation[e][t])
                })
            })
        }),
        e.find(".choice_show_logic_show_questions").remove(),
        edit.updateChoiceShowLogic()) : logic_condition_relation && logic_condition_relation[i] && !$.isEmptyObject(logic_condition_relation[i]) ? (delete logic_condition_relation[i],
        $.each(logic_show_relation, function (e, t) {
            t && $.each(t, function (t) {
                t == i && (delete logic_show_relation[e][t],
                $.isEmptyObject(logic_show_relation[e]) && delete logic_show_relation[e])
            })
        }),
        e.find(".choice_show_logic_show_questions").remove()) : logic_show_relation && logic_show_relation[i] && !$.isEmptyObject(logic_show_relation[i]) && (delete logic_show_relation[i],
        $.each(logic_condition_relation, function (e, t) {
            t && $.each(t, function (t, s) {
                s && $.each(s, function (s) {
                    s == i && (delete logic_condition_relation[e][t][s],
                    $.isEmptyObject(logic_condition_relation[e][t]) && delete logic_condition_relation[e][t])
                })
            })
        }),
        edit.updateChoiceShowLogic())
    }
    function h(i) {
        var e = $(i).parents(".operate").siblings(".question-title").attr("type")
          , t = $(i).parents(".operate").siblings(".question-title").find(".question-id").attr("order");
        require.async(["home:static/js/survey/widget/question_handle.js"], function (s) {
            s.show(i, e, t, "确定", "取消")
        })
    }
    //增加选项
    function u(i) {
        var e = $(i).parents(".add-area").siblings(".question-title").attr("type")
          , t = ""
          , a = parseInt($(i).parents(".add-area").siblings(".question-title").find(".question-id").attr("absolute_id"));
        choice_absolute_id[a]++;
        var o = choice_absolute_id[a];
        switch (e) {
            case "6":
                var l = $(i).parents(".add-area").siblings(".question-choice").find(".choice").length + 1;
                t += '<li class="choice" has_other="N" choice_absolute_id=' + o + '><div class="radio radio-warning p-l-5"><input type="radio" name="radio"><label class="edit-area edit-child-element" contenteditable="true" content-default="1">选项' + l + "</label></div></li>",
                $(i).parents(".add-area").siblings(".question-choice").append(t),
                $(i).parents(".add-area").siblings(".question-choice").hasClass("select-ul") && $(i).parents(".add-area").siblings(".question-choice").find(".choice").addClass("select_choice");
                break;
            case "8":
                var l = $(i).parents(".add-area").siblings(".question-choice").find(".choice").length + 1;
                t += '<li class="choice" has_other="N" choice_absolute_id=' + o + '><div class="checkbox checkbox-warning checkbox-circle p-l-5"><input type="checkbox" name="checkbox"><label class="edit-area edit-child-element" contenteditable="true" content-default="1">选项' + l + "</label></div></li>",
                $(i).parents(".add-area").siblings(".question-choice").append(t);
                break;
            case "9":
                if ("N" === $(i).parents(".add-area").attr("choice")) {
                    var l = $(i).parents(".add-area").siblings(".question-choice").find("tr").length;
                    t += '<tr><td class="radio_array_title" name="radio-matrix"> <div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">矩阵行' + l + "</div></div></td>";
                    for (var n = $(i).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td").length, c = 1; n > c; c++)
                        t += "Y" == $(i).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td:eq(" + c + ")").find(".choice").attr("has_other") ? '<td><input type="radio"><input type="text" class="other-content"  style="width: 140px;height: 13px;" ></td>' : '<td><input type="radio"></td>';
                    t += "</tr>",
                    $(i).parents(".add-area").siblings(".question-choice").find("tbody").append(t)
                } else {
                    var l = $(i).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td").length;
                    t += '<td name="radio-matrix-choice"><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" has_other="N" contenteditable="true" content-default="1">选项' + l + "</li></div></td>",
                    $(i).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").append(t),
                    $(i).parents(".add-area").siblings(".question-choice").find("tr").each(function () {
                        $(this).index() > 0 && $(this).append('<td><input type="radio"></td>')
                    })
                }
        }
        elementInit(),
        $(i).parents(".add-area").siblings(".question-choice").hasClass("select-ul") || s()
    }
    function p(i) {
        require.async(["home:static/js/survey/widget/batchAddChoice.js"], function (e) {
            e.show(i, "确定", "取消")
        })
    }
    function v() {
        if ($("#question-box").append($(".edit-img")),
        $(".edit-area-active").parents("td").hasClass("radio_array_title"))
            $(".edit-area-active").parents("tr").remove();
        else if ($(".edit-area-active").hasClass("matrix-choice")) {
            var i = $(".edit-area-active").parents("td").index();
            $(".edit-area-active").parents("tr").siblings("tr").each(function () {
                $(this).find("td:eq(" + i + ")").remove()
            }),
            $(".edit-area-active").parents("td").remove()
        } else
            $(".edit-area-active").parents(".choice").remove();
        $(".edit-img").hide(),
        $(".edit-area-active").parent().hasClass("select_choice") || s()
    }
    function _() {
        var i, e = !1;
        $(".edit-area-active").parents("td").hasClass("radio_array_title") ? (i = $(".edit-area-active").parents("tr"),
        i.index() > 1 && (e = !0)) : (i = $(".edit-area-active").parents(".choice"),
        i.index() > 0 && (e = !0)),
        e && (i.prev().before(i),
        $(".edit-area-active").focus().trigger("click"),
        $(".edit-area-active").parent().hasClass("select_choice") || s())
    }
    function b() {
        var i, e;
        $(".edit-area-active").parents("td").hasClass("radio_array_title") ? (i = $(".edit-area-active").parents("tr"),
        e = $(".edit-area-active").parents(".question-choice").find("tr")) : (i = $(".edit-area-active").parents(".choice"),
        e = $(".edit-area-active").parents(".question-choice").find(".choice"));
        var t = i.index();
        t < e.length && (i.next().after(i),
        $(".edit-area-active").focus().trigger("click"),
        $(".edit-area-active").parent().hasClass("select_choice") || s())
    }
    function q() {
        require.async(["home:static/js/survey/widget/choice_operate_dialog.js"], function (i) {
            i.show("确定", "取消")
        })
    }
    function g(i) {
        var e = '<ul class="question-choice select-ul" >'
          , t = $(i).siblings(".question-title").find(".question-id").attr("absolute_id");
        $(i).siblings(".question-choice").find(".choice").each(function () {
            var i = $(this).attr("choice_absolute_id");
            if (e += '<li class="choice select_choice" has_other="N" choice_absolute_id=' + $(this).attr("choice_absolute_id") + '><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true">' + $(this).html() + "</div></div>",
            logic_condition_relation && logic_condition_relation[t] && logic_condition_relation[t][i]) {
                var s = '<span class="choice_show_logic_show_questions">显示'
                  , a = 0;
                $.each(logic_condition_relation[t][i], function (i, e) {
                    e > 0 && (a = 1,
                    s += $('[absolute_id="' + i + '"]').html() + "&nbsp")
                }),
                s += "</span>",
                a && (e += s)
            }
            e += "</li>"
        }),
        e += "</ul>",
        $(i).siblings(".question-choice").remove(),
        $(i).after(e);
        var s = '<div class="add-area visible-show"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li><li class="finish_edit_select" onclick="edit.finishEditSelect(this)" style="width: 60px;cursor: pointer;">完成编辑</li></ul></div>';
        $(i).siblings(".operate").before(s),
        $(i).siblings(".question-title").attr("type", "6"),
        $(i).remove(),
        elementInit()
    }
    function f(i) {
        $("#question-box").append($(".edit-img"));
        var e = '<select class="question-choice" style="  padding: 0;margin: 15px 0 20px 35px;">';
        $(i).parents(".add-area").siblings(".question-choice").find(".choice").each(function () {
            e += '<option class="choice" has_other="N" choice_absolute_id=' + $(this).attr("choice_absolute_id") + ">" + $(this).find(".edit-area").html() + "</option>"
        }),
        e += '</select><span class="edit-select" onclick="edit.editSelect(this)" style="width: 60%;display: inline-block;line-height: 30px;">编辑选项</span>',
        $(i).parents(".add-area").siblings(".question-choice").remove(),
        $(i).parents(".add-area").siblings(".question-title").after(e),
        $(i).parents(".add-area").siblings(".question-title").attr("type", "7"),
        $(i).parents(".add-area").remove(),
        $(".edit-img").hide(),
        s()
    }
    function m() {
        $(".upload-form").ajaxSubmit({
            dataType: "json",
            success: function (i) {
                var e = $(".edit-area-active").html();
                e += '<img src="' + i.img_url + '" name="' + i.img_id + '"  style="width:' + i.width + "px; height:" + i.height + 'px;"/>',
                $(".edit-area-active").html(e),
                $(".edit-area").find("img").each(function () {
                    new ImgEditSize($(this))
                }),
                $(".upload-img").val(""),
                s()
            }
        })
    }
    function y(i) {
        var e = ["单选题", "选择列表", "多选题", "单行填空题", "多行填空题", "矩阵单选题", "段落说明"];
        return e.indexOf(i) >= 0 ? !0 : !1
    }
    function x(i) {
        var e = /^(选项|矩阵行)\d*$/g;
        return null === i.match(e) ? !1 : !0
    }
    return {
        sortQuestions: i,
        attachLayer: e,
        updateChoiceShowLogic: t,
        saveSurvey: s,
        scrollBox: l,
        visibleHandle: n,
        removeLogicCondition: r,
        questionHandle: h,
        questionCopy: c,
        questionDelete: d,
        addQuestion: u,
        batchAddChoice: p,
        removeChildElement: v,
        upChildElement: _,
        downChildElement: b,
        handleChildElement: q,
        editSelect: g,
        finishEditSelect: f,
        uploadImg: m,
        isDefaultQuestion: y,
        isDefaultChoice: x
    }
}()
  , showAlert = function (i) {
      require.async(["home:static/js/survey/widget/operate_popup.js"], function (e) {
          e.show(i, "确定", null)
      })
  }
;

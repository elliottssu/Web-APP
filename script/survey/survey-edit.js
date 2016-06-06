function popSuggestionSelector(e, t) {
    require.async(["home:static/js/quit-task-dialog.js"], function (i) {
        i.show(e, t).then(function () {
            location.href = CA.baseUrlModule + "home/manageSurvey"
        })
    })
}
function createQuitInfo(e, t) {
    var i = {};
    i.url = window.location.href,
    i.screenShotUrl = e,
    i.from = t;
    var o = CA.baseUrlModule + "quitTask/createQuitInfo";
    $.post(o, i, function () {
        location.href = CA.baseUrlModule + "home/manageSurvey"
    })
}
$(document).ready(function () {
    $(".survey-nav-tab").click(function () {
        var e = $(this).find(".survey-nav-icon").html();
        "2" === e && checkSurveyTitle(surveyTitle) && ($(".topic-type-question").length > 0 ? (edit.saveSurvey(1),
        surveyTool.createSurveyActionLog("edit", "nextStep", "imgClick", survey_init.survey_id),
        location.href = CA.baseUrlModule + "home/surveyFilter?survey_id=" + survey_init.survey_id) : require.async(["home:static/js/survey/widget/operate_popup.js"], function (e) {
            e.show("请完成问卷信息编辑", "确定", null)
        }))
    }),
    survey_init.content && $.each(survey_init.content, function (e, t) {
        $(".question-box-init").remove();
        var i = {};
        i.question_content = t,
        selectEditedQuestion(i)
    });
    var e = $.Deferred();
    $(".title-content").blur(function () {
        surveyTitle = "";
        var t = $(".title-content").html();
        return t.length > 20 ? ($(".survey-title .error-tips").addClass("error"),
        $(".survey-title .error-tips").text("问卷名称不能超过20字"),
        void e.resolve()) : 0 == t.length ? ($(".survey-title .error-tips").addClass("error"),
        $(".survey-title .error-tips").text("问卷名称不能为空"),
        void e.resolve()) : ($(".survey-title .error-tips").removeClass("error"),
        surveyTitle = t,
        e.resolve(),
        void 0)
    }),
    $(".title-content").trigger("blur"),
    $(".title-content").focus(function () {
        e = $.Deferred(),
        $(".survey-title .error-tips").removeClass("error"),
        $(".survey-title .error-tips").text("")
    }),
    $(".common-questions ul").hide(),
    $(".common-questions-title, .select-question-title").click(function () {
        selectQuestionGroup($(this))
    }),
    $(".common-questions").on("click", ".common_question", function () {
        $(".question-box-init").remove();
        var e = $(this).attr("index");
        selectEditedQuestion(common_question[e]),
        edit.scrollBox(),
        edit.saveSurvey(),
        elementInit()
    }),
    $("#question-box").sortable({
        connectWith: "#question-box",
        handle: ".drag-area",
        start: function (e, t) {
            var i = t.item
              , o = i.find(".question-id").attr("absolute_id");
            logic_condition_relation && logic_condition_relation[o] && !$.isEmptyObject(logic_condition_relation[o]) || logic_show_relation && logic_show_relation[o] && !$.isEmptyObject(logic_show_relation[o]) ? require.async(["home:static/js/survey/widget/sortable_popup.js"], function (e) {
                e.show("该题有关联的逻辑规则，移动题目会导致规则失效，确认移动？", "确定", "取消").then(function () {
                    edit.sortQuestions(),
                    edit.removeLogicCondition(o, i),
                    edit.saveSurvey()
                }, function () {
                    $("#question-box").sortable("cancel")
                })
            }) : $("#question-box").sortable({
                stop: function () {
                    edit.sortQuestions(),
                    edit.updateChoiceShowLogic(),
                    edit.saveSurvey()
                }
            })
        }
    }),
    $(".module").on("click", function () {
        $(".question-box-init").remove();
        var e = $(this).attr("name");
        selectQuestion(e),
        edit.saveSurvey()
    }),
    $(window).bind("scroll", function () {
        $(window).scrollTop() > 250 ? ($(".sur-sidebar").addClass("fixed-area"),
        $(window).scrollTop() + 150 > $("#edit-survey-content").height() ? $(".fixed-area").css("top", "-" + ($(window).scrollTop() + 150 - $("#edit-survey-content").height()) + "px") : $(".fixed-area").css("top", "0")) : $(".sur-sidebar").removeClass("fixed-area")
    }),
    $(".op-next").click(function () {
        checkSurveyTitle(surveyTitle) && ($(".topic-type-question").length > 0 ? (edit.saveSurvey(1),
        surveyTool.createSurveyActionLog("edit", "nextStep", "buttonClick", survey_init.survey_id)) : require.async(["home:static/js/survey/widget/operate_popup.js"], function (e) {
            e.show("请完成问卷信息编辑", "确定", null)
        }))
    }),
    $(".attach-layer, #survey-tail").click(function () {
        $(".choice .edit-area").css({
            display: "inline"
        }),
        $(".edit-img").hide(),
        $(".edit-area").css({
            background: "#fff",
            border: "none"
        }),
        $(".title-content").css({
            border: "1px solid #dbdbdb"
        }),
        t != $(".edit-area-active").html() && ($(".edit-area-active").parents().hasClass("select_choice") || edit.saveSurvey(),
        t = $(".edit-area-active").html()),
        selectFinish()
    }),
    elementInit();
    var t = $(".edit-area-active").html();
    $(".edit-area").find("img").each(function () {
        new ImgEditSize($(this))
    }),
    $("#quit-edit-survey").click(function () {
        var e = "";
        html2canvas(document.body, {
            allowTaint: !0,
            taintTest: !1,
            onrendered: function (t) {
                t.id = "mycanvas",
                e = t.toDataURL(),
                popSuggestionSelector(e, "问卷调研")
            }
        })
    })
});
var checkSurveyTitle = function (e) {
    return "" === e ? (showAlert("请正确填写问卷名称"),
    !1) : !0
}
  , saveSurvey = function (e, t) {
      if (t) {
          if (createLocked === !1) {
              createLocked = !0,
              $("#save-button").addClass("save-button-locked");
              var i = "本问卷均采用匿名填写，请放心提出我们公司企业文化的意见。"
                , o = 0
                , r = CA.baseUrlModule + "home/createSurveyProject"
                , n = {
                    pro_name: t,
                    test_content: i,
                    poster: o,
                    YII_CSRF_TOKEN: CA.yiiCsrfToken
                };
              $http.post(r, n).success(function (t) {
                  0 === t.error_code ? window.location.href = e + t.survey_id : (createLocked = !1,
                  showAlert("保存问卷不成功，请重新提交！"))
              })
          }
      } else
          showAlert("请正确填写问卷名!")
  }
;

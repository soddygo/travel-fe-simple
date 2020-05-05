;(function () {
  let _fn,
    handle,
    CFG;
  CFG = {
    TIMEOUT: 200000 // 超时时间
  }
  handle = {

    //get请求
    query: function () {
      let url,
        param,
        type,
        callback;
      if (arguments.length == 3) {
        url = arguments[0];
        type = 'json';
        param = arguments[1];
        callback = arguments[2];
      } else if (arguments.length == 4) {
        url = arguments[0];
        type = arguments[1];
        param = arguments[2];
        callback = arguments[3];
      } else {
        return;
      }

      url = _fn.getUrl(url);
      param = param || {};
      param = _fn.decorateParam(param);
      $.ajax({
        url: url,
        dataType: 'json',
        data: param,
        xhrFields: {
          withCredentials: true
        },
        contentType: false,
        type: 'GET',
        cache: false,
        timeout: CFG.TIMEOUT,
        success: function (res) {
          if (typeof callback == 'function') {
            _fn.callbackProxy(res, callback);
          }
        },
        error: function () {
          let data = {
            code: '-1',
            result: '加载数据失败',
            data: {}
          };
          if (typeof callback == 'function') {
            _fn.callbackProxy(data, callback);
          }
        }
      });
    },
    //post请求
    post: function () {
      let url,
        param,
        type,
        callback,
        contentType;
      if (arguments.length >= 3) {
        url = arguments[0];
        type = 'json';
        param = arguments[1];
        callback = arguments[2];
        if (arguments.length === 4) {
          contentType = arguments[3];
        } else {
          //默认
          contentType:'application/x-www-form-urlencoded; charset=UTF-8'
        }
      } else {
        return;
      }
      param = param || {};
      param = _fn.decorateParam(param);
      $.ajax({
        url: url,
        dataType: 'json',
        contentType: contentType,
        data: param,
        xhrFields: {
          withCredentials: true
        },
        type: 'POST',
        cache: false,
        timeout: CFG.TIMEOUT,
        success: function (res) {
          if (typeof callback == 'function') {
            _fn.callbackProxy(res, callback);
          }
        },
        error: function () {
          let data = {
            code: '-1',
            result: '加载数据失败',
            data: {}
          };
          if (typeof callback == 'function') {
            _fn.callbackProxy(data, callback);
          }
        }
      });
    },
    //文件上传
    postFile: function (option) {
      let url,
        param,
        file,
        type,
        callback;
      if (arguments.length == 3) {
        url = api[arguments[0]];
        type = 'json';
        param = arguments[1].param;
        file = arguments[1].file;
        callback = arguments[2];
      } else {
        return;
      }
      url = _fn.getUrl(url);
      let formData = new FormData();
      formData.append("file", file);
      for (let i in param) {
        formData.append(i, param[i]);
      }

      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        xhrFields: {
          withCredentials: true
        },
        /**
         *必须false才会自动加上正确的Content-Type
         */
        contentType: false,
        /**
         * 必须false才会避开jQuery对 formdata 的默认处理
         * XMLHttpRequest会对 formdata 进行正确的处理
         */
        processData: false,
        success: function (res) {
          if (typeof callback == 'function') {
            _fn.callbackProxy(res, callback);
          }
        },
        error: function (res) {
          if (typeof callback == 'function') {
            _fn.callbackProxy(res, callback);
          }
        }
      });
    }
  };
  _fn = {
    //解决options
    objectToFormData: function (obj, form, namespace) {
      const fd = form || new FormData();

      for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
          let tempItem = obj[property];

          if (Array.isArray(tempItem)) {
            //数组
            let length = obj.length;
            //for循环
            for (let index in tempItem) {
              let formKey;
              let key = "[" + index + "]";
              if (namespace) {
                formKey = namespace + key;
              } else {
                formKey = property + key;
              }

              let indexItem = tempItem[index];

              // if the property is an object, but not a File, use recursivity.
              if (typeof indexItem === 'object' && !(indexItem instanceof File)) {
                _fn.objectToFormData(indexItem, fd, formKey);
              } else {

                // if it's a string or a File object
                fd.append(formKey, indexItem);
              }

            }

          } else {
            //对象

            let key = "." + property;
            let formKey;
            if (namespace) {
              formKey = namespace + key;
            } else {
              formKey = property;
            }

            // if the property is an object, but not a File, use recursivity.
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
              _fn.objectToFormData(tempItem, fd, formKey);
            } else {

              // if it's a string or a File object
              fd.append(formKey, tempItem);
            }
          }


        }
      }

      return fd;

    },
    urlEncode: function (param, key, encode) {
      if (param == null) return '';
      let paramStr = '';
      let t = typeof (param);
      if (t === 'string' || t === 'number' || t === 'boolean') {

        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
      } else {
        for (let i in param) {
          let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
          paramStr += _fn.urlEncode(param[i], k, encode)
        }
      }
      return paramStr;

    },
    // 装饰参数
    decorateParam: function (param) {
      return param;
    },

    //获取需要的url
    getUrl: function (str) {
      let url = '';
      if (!str) {
        return str;
      }
      if (str.indexOf('http://') > -1 || str.indexOf('https://') > -1) { //传入的是完整的url
        url = str;
      } else { //传入的是字符串，需要在API中寻找
        url = api[str];
      }
      return url;
    }

  }
  define('travel-fe-simple/js/config/ajax', function (require, exports, module) {
    let api = require('travel-fe-simple/js/config/dataapimix');
    module.exports = $.extend(handle, api);

  });
})();

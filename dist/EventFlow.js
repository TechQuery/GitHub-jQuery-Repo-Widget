//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function (factory) {

    if ((typeof define === 'function')  &&  define.amd)
        define('EventFlow', ["web-cell"], factory);
    else if (typeof module === 'object')
        return  module.exports = factory(require('web-cell'));
    else
        return  this['EventFlow'] = factory(this['web-cell']);

})(function (web_cell) {

function merge(base, path) {

    return (base + '/' + path).replace(/\/\//g, '/').replace(/[^/.]+\/\.\.\//g, '').replace(/\.\//g, function (match, index, input) {

        return input[index - 1] === '.' ? match : '';
    });
}

function outPackage(name) {
    return (/^[^./]/.test(name)
    );
}

    var require = _require_.bind(null, './');

    function _require_(base, path) {

        var module = _module_[
                outPackage( path )  ?  path  :  ('./' + merge(base, path))
            ],
            exports;

        if (! module.exports) {

            module.exports = { };

            var dependency = module.dependency;

            for (var i = 0;  dependency[i];  i++)
                module.dependency[i] = require( dependency[i] );

            exports = module.factory.apply(
                null,  module.dependency.concat(
                    _require_.bind(null, module.base),  module.exports,  module
                )
            );

            if (exports != null)  module.exports = exports;

            delete module.dependency;  delete module.factory;
        }

        return module.exports;
    }

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _module_ = {
    './index.css': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = "ul[data-array] {\n    list-style:    none;\n    margin:        0;\n    padding:       0;\n}\nul[data-array] > li {\n    display:    table;\n    width:      100%;\n}\nul[data-array] > li > * {\n    display:           table-cell;\n    table-layout:      fixed;\n    vertical-align:    middle;\n    padding:           0.5em;\n}\nul[data-array] > li > *:first-child {\n    text-align:    center;\n    width:         10em;\n}\n\nimg {\n    max-width:    5em;\n}\n";
        }
    },
    './index.html': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = "<template>\n    <ul data-array=\"events\"><li>\n        <a target=\"_blank\" href=\"https://github.com/${view.actor.login}\" title=\"${view.actor.login}\">\n\n            <img src=\"${view.actor.avatar_url}\">\n\n            <div>${view.actor.display_login}</div>\n        </a>\n        <div>\n            <h4>\n                <a target=\"_blank\" href=\"https://github.com/${view.repo.name}\">\n                    ${view.repo.name}\n                </a>\n            </h4>\n            <span title=\"${(new Date( view.created_at )).toLocaleString()}\">\n                ${view.createdTime}\n            </span>\n\n            ${host.methodMap[ view.payload.action ]}\n\n            ${host.eventMap[ view.type.replace('Event', '') ]}\n\n            <span data-object=\"payload\">\n                <a target=\"_blank\" href=\"${host.detailURLOf( view )}\">\n                    ${\n                        (view.ref || view.master_branch)  ||\n                        (view.issue || view.pull_request || '').title  ||\n                        (view.release || '').name  ||\n                        (view.member || '').login\n                    }\n                </a>\n                <ol data-array=\"pages\" style=\"display: ${scope.pages ? '' : 'none'}\">\n                    <li>\n                        ${scope.method[ view.action ]}\n\n                        <a target=\"_blank\" href=\"${view.html_url}\" title=\"${view.summary || view.sha}\">\n\n                            ${view.title}\n                        </a>\n                    </li>\n                </ol>\n            </span>\n        </div>\n    </li></ul>\n</template>\n";
        }
    },
    './index': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _webCell = require('web-cell');

            var _index = require('./index.html');

            var _index2 = _interopRequireDefault(_index);

            var _index3 = require('./index.css');

            var _index4 = _interopRequireDefault(_index3);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            var intersection = new WeakMap();

            var GithubEventFlow = function (_HTMLElement) {
                _inherits(GithubEventFlow, _HTMLElement);

                function GithubEventFlow() {
                    var _this;

                    _classCallCheck(this, GithubEventFlow);

                    (_this = _possibleConstructorReturn(this, (GithubEventFlow.__proto__ || Object.getPrototypeOf(GithubEventFlow)).call(this)), _this).buildDOM(_index2.default, _index4.default);

                    _this.nextPage = 1;

                    intersection.set(_this, new IntersectionObserver(function (entry) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {

                            for (var _iterator = entry[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var item = _step.value;
                                if (item.isIntersecting) return _this.connectedCallback();
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }));
                    return _this;
                }

                _createClass(GithubEventFlow, [{
                    key: 'connectedCallback',
                    value: function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var observer, events, content, list;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            observer = intersection.get(this), events = this.view.events;
                                            content = events.content;


                                            if (content.lastElementChild) observer.unobserve(content.lastElementChild);

                                            _context.next = 5;
                                            return this.getData();

                                        case 5:
                                            list = _context.sent;

                                            if (list[0]) {
                                                _context.next = 8;
                                                break;
                                            }

                                            return _context.abrupt('return');

                                        case 8:

                                            events.render(list);

                                            observer.observe(content.lastElementChild);

                                        case 10:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));

                        function connectedCallback() {
                            return _ref.apply(this, arguments);
                        }

                        return connectedCallback;
                    }()
                }, {
                    key: 'attributeChangedCallback',
                    value: function attributeChangedCallback(name, oldValue) {

                        if (oldValue != null) this.connectedCallback();
                    }
                }, {
                    key: 'getData',
                    value: function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var response, next;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            _context2.next = 2;
                                            return fetch(this.URL);

                                        case 2:
                                            response = _context2.sent;
                                            next = /page=(\d+)>; rel="next"/.exec(response.headers.get('Link'));


                                            this.nextPage = next ? +next[1] : this.nextPage + 1;

                                            _context2.next = 7;
                                            return response.json();

                                        case 7:
                                            return _context2.abrupt('return', _context2.sent);

                                        case 8:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        }));

                        function getData() {
                            return _ref2.apply(this, arguments);
                        }

                        return getData;
                    }()
                }, {
                    key: 'detailURLOf',
                    value: function detailURLOf(event) {

                        var model = event.issue || event.pull_request || event.release || event.member;

                        return (model || '').html_url;
                    }
                }, {
                    key: 'URL',
                    get: function get() {

                        var user = this.getAttribute('user'),
                            repo = this.getAttribute('repo'),
                            org = this.getAttribute('org');

                        var path;

                        if (repo) path = 'repos/' + (user || org || 'TechQuery') + '/' + (repo || 'GitHub-Web-Widget') + '/events';else if (user) path = 'users/' + user + '/events/public';else if (org) path = 'orgs/' + org + '/events';

                        if (path) return 'https://api.github.com/' + path + '?page=' + this.nextPage;
                    }
                }, {
                    key: 'methodMap',
                    get: function get() {

                        return {
                            created: '创建',
                            edited: '编辑',
                            closed: '关闭',
                            opened: '开启',
                            started: '星标',
                            published: '发布',
                            added: '添加'
                        };
                    }
                }, {
                    key: 'eventMap',
                    get: function get() {

                        return {
                            Create: '创建',
                            Delete: '删除',
                            Push: '推送',
                            Watch: '关注',
                            Issues: '问题',
                            IssueComment: '回复',
                            Fork: '衍生',
                            PullRequest: '请求拉取',
                            PullRequestReviewComment: '评审',
                            Release: '版本',
                            Member: '成员',
                            Gollum: '维基',
                            Public: '公开'
                        };
                    }
                }], [{
                    key: 'observedAttributes',
                    get: function get() {
                        return ['user', 'org', 'repo'];
                    }
                }]);

                return GithubEventFlow;
            }(HTMLElement);

            exports.default = GithubEventFlow;
            (0, _webCell.component)(GithubEventFlow);
        }
    },
    'web-cell': { exports: web_cell }
};

    return require('./index');
});
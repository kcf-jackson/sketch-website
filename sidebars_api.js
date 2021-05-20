module.exports = {
    api: [
        {"source": ['source_r', 'source_js', 'source_active']},
        {"compile": ['compile_r', 'compile_exprs', 'compile_active', 'compile_data']},
        {"rules": ['r-to-js-rules', 'combine_rules', 'split_rules', 'print.rule']},
        {"deparsers": [
            'basic_deparsers', 'default_deparsers', 'default_2_deparsers', 
            'deparsers_component', 'dp', 'list-of-deparsers'
        ]},
        {"make": ['make_deparser', 'make_rule', 'make_processor']},
        {"pipeline": ['parse_expr', 'rewrite', 'deparse_js']},
        {"markdown": ['insert_sketch', 'eng_sketch']},
        {"utility": [
            'assets', 'convert_src',
            'test_sketch', 'websocket', 'safeguard',
            'src', 'license_info', 
            'read_multilines', 'runShinyApp', 
            'to_json', 'to_shiny_tag',
            'html_tags', 'default_processors'
        ]},
        {"predicates": ['is_call', 'is_syntactic_literal', 'predicate_component']},
        {"reference": ['empty-functions', 'header-functions', 'sketch-package']}
    ]
};

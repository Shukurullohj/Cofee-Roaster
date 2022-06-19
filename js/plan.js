new Vue({
    el: "#app",
    data: {
        showNav: false,
        showModal: false,
        isDisabled: false,
        selected: false,
        optionOpenPreference: false,
        optionOpenType: false,
        optionOpenLike: false,
        optionOpenGrind: false,
        optionOpenDeliver: false,
        selectedPreference: '',
        selectedType: '',
        selectedLike : '',
        selectedGrind: '',
        selectedDeliver: '',
      
        preferences: [
            {name: 'Capsule', text: 'Compatible with Nespresso systems and similar brewers', value: 1},
            {name: 'Filter', text: 'For pour over or drip methods like Aeropress, Chemex, and V60', value: 2},
            {name: 'Espresso', text: 'Compatible with Nespresso systems and similar brewers', value: 3}
        ],
        types: [
            {name: 'Single Origin', text: 'Compatible with Nespresso systems and similar brewers', value: 1},
            {name: 'Decaf', text: 'For pour over or drip methods like Aeropress, Chemex, and V60', value: 2},
            {name: 'Blended', text: 'Compatible with Nespresso systems and similar brewers', value: 3}
        ],
        likes: [
            {name: '250g', text: 'Compatible with Nespresso systems and similar brewers', value: 1},
            {name: '500g', text: 'For pour over or drip methods like Aeropress, Chemex, and V60', value: 2},
            {name: '1000g', text: 'Compatible with Nespresso systems and similar brewers', value: 3}
        ],
        grinds: [
            {name: 'Wholebean', text: 'Compatible with Nespresso systems and similar brewers', value: 1},
            {name: 'Filter', text: 'For pour over or drip methods like Aeropress, Chemex, and V60', value: 2},
            {name: 'Cafetiere', text: 'Compatible with Nespresso systems and similar brewers', value: 3}
        ],
        delivers: [
            {name: 'Every week', text: 'Compatible with Nespresso systems and similar brewers', value: 1},
            {name: 'Every 2 weeks', text: 'For pour over or drip methods like Aeropress, Chemex, and V60', value: 2},
            {name: 'Every month', text: 'Compatible with Nespresso systems and similar brewers', value: 3}
        ],
        
        },
        
    methods: {
        goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;

        window.scrollTo(0, top);
        },
        optionSelectPreference(preference) {
            this.selectedPreference = preference.name
        },
        optionSelectType(type) {
            this.selectedType = type.name
        },
        optionSelectLike(like) {
            this.selectedLike = like.name
        },
        optionSelectGrind(grind) {
            this.selectedGrind = grind.name
        },
        optionSelectDeliver(deliver) {
            this.selectedDeliver = deliver.name
        }
    },
    computed: {
        showOptionPreference: function() {
            return {
                optionOpenPreference : this.optionOpenPreference,
            }
        },
        showOptionType: function() {
            return {
                optionOpenType : this.optionOpenType,
            }
        },
        showOptionLike: function() {
            return {
                optionOpenLike : this.optionOpenLike,
            }
        },
        showOptionGrind: function() {
            return {
                optionOpenGrind : this.optionOpenGrind,
            }
        },
        showOptionDeliver: function() {
            return {
                optionOpenDeliver : this.optionOpenDeliver,
            }
        },
    }
  });
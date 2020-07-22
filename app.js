Vue.component('closing', {
    props: ['closing', 'name'],
    template:
    `
    <div>
    <div style="margin-bottom:15mm" contenteditable="true">{{closing}}</div>
    <div style="margin-bottom:10mm">{{name}}</div>
    </div>
    `
})

const vm = new Vue({
    el: '#app',
    data: function() {
        return {
            address_name: 'Maxi Musterfrau',
            address_street: 'Haupstraße 1',
            address_city: '10115 Berlin',
            date: this.date,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo sit magnam ratione! Perferendis alias asperiores non vitae animi, soluta doloribus modi, iusto voluptas earum fuga dolor tempora fugiat id.',
            closing: 'Mit freundlichen Grüßen',
            mobile: '+49 171 960855',
            mail: 'maxi.musterfrau@musterfrau.org',
            web: 'http://musterfrau.com',
            showFooter: false
        }
    },
    methods: {
        getDate: function() {
            let today = new Date();
            let options = {year: 'numeric', month: 'long', day: 'numeric'}
            let date = today.toLocaleDateString('de-DE', options);
            return date;
        }
    },
    created() {
        this.date = this.getDate();
    }
});

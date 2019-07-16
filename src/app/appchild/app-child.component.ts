import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-child',
    template: `
        <div class="child">
            child
            <div>
                Parent data here:
                <div>
                    {{ this.data.name }}
                </div>
            </div>
        </div>
    `
})
export class AppChildComponent {
    @Input() data;
}
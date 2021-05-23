class Slot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = 0; // 1 player one - 2 player two
    }

    show() {
        switch (this.value) {
            case 0:
                fill (220, 229, 223);
                break;

            case 1:
                fill (255, 133, 25);
                break;

            case 2:
                fill (0, 118, 143);
                break;
        }
        rect(this.x, this.y, 100, 100);
    }

    validateClick(mx, my){
        if (mx > this.x && mx < this.x + 100 &&
             my > this.y && my < this.y + 100 && this.value == 0 ){
        return true;
        }
        return false;
    }

    setValue(newValue){
        this.value = newValue
    }
}
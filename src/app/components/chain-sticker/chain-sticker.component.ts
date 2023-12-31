import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chain-sticker',
  templateUrl: './chain-sticker.component.html',
  styleUrls: ['./chain-sticker.component.scss']
})
export class ChainStickerComponent implements OnInit{

  @Input() chainId!: number;
  @Input() chainName!: string;
  chainNameLetters!:string[];

  ngOnInit(): void {
    this.chainNameLetters = this.chainName.split("");
  }

}
